# Documentation du Système de Gestion Juridique - Backend Spring Boot

## 📋 Vue d'ensemble du projet

Ce projet implémente un système de gestion de dossiers juridiques basé sur Spring Boot 3.5.x avec PostgreSQL. Le système gère les clients, avocats, super admins, et documents légaux selon un diagramme UML finalisé.

## 🏗️ Architecture du projet

```
src/main/java/org/backend/backend/
├── entity/          # Entités JPA (10 classes)
├── enums/           # Énumérations (8 enums)
├── repository/      # Interfaces Repository (7 interfaces)
└── BackendApplication.java
```

---

## 🔢 Énumérations (Enums)

### 1. **RoleEnum** - Gestion des rôles utilisateurs
```java
SUPER_ADMIN, ADMIN, CLIENT
```
**Utilité :** Définit les trois types d'utilisateurs du système avec une hiérarchie claire.

### 2. **StatutDossier** - États des dossiers
```java
OUVERT, ARCHIVE
```
**Utilité :** Cycle de vie simple des dossiers juridiques (actif ou archivé).

### 3. **StatutPaiementDossier** - États de paiement
```java
PAYE, NON_PAYE
```
**Utilité :** Suivi des paiements clients pour la facturation.

### 4. **SourceDocument** - Origine des documents
```java
IMPORTE, GENERE
```
**Utilité :** Distinction entre documents importés par l'utilisateur et générés automatiquement.

### 5. **Priorite** - Niveaux de priorité
```java
BASSE, MOYENNE, HAUTE
```
**Utilité :** Classification des tâches et événements par importance.

### 6. **TypeLieuRdv** - Types de lieux de rendez-vous
```java
EN_LIGNE, SUR_PLACE
```
**Utilité :** Adaptation aux modes de travail modernes (télétravail/présentiel).

### 7. **StatutRdv** - États des rendez-vous
```java
DEMANDE, ACCEPTE, REJETE
```
**Utilité :** Workflow de validation des rendez-vous.

### 8. **StatutTache** - États des tâches
```java
A_FAIRE, EN_COURS, TERMINEE
```
**Utilité :** Suivi du cycle de vie des tâches.

---

## 🏛️ Entités JPA

### 1. **Utilisateur** (Classe de base)
```java
@Entity
@Table(name = "utilisateur")
@Inheritance(strategy = InheritanceType.JOINED)
```

**Annotations clés :**
- `@Inheritance(strategy = InheritanceType.JOINED)` : Héritage avec tables séparées jointes
- `@Column(unique = true)` : Contrainte d'unicité sur username et email
- `@Enumerated(EnumType.STRING)` : Stockage enum comme texte (plus lisible en BDD)

**Champs principaux :**
- `id`, `username`, `prenom`, `nom`, `telephone`, `email`
- `motDePasseHash`, `estActif`, `doitChangerMdp`, `role`
- Champs optionnels : `adresse`, `ville`, `cinOuPasseport`

### 2. **UtilisateurEntreprise** (Héritage)
```java
@Entity
@Table(name = "utilisateur_entreprise")
@EqualsAndHashCode(callSuper = true)
```

**Pourquoi l'héritage :** Étend Utilisateur pour les clients entreprises avec `nomEntreprise` et `codeFiscalite`.

### 3. **Dossier** (Entité centrale)
```java
@Entity
@Table(name = "dossier")
```

**Relations importantes :**
- `@ManyToOne` vers `Utilisateur` (client et admin)
- `@OneToMany` vers `Document`, `Audience`, `Tache`
- `cascade = CascadeType.ALL` : Suppression en cascade des éléments liés

**Champs métier :**
- `titre`, `typeDossier`, `statut`, `statutPaiement`
- `dateCreation`, `dateMiseAJour`, `montantDu`

### 4. **Document**
```java
@Entity
@Table(name = "document")
```

**Relations :**
- `@ManyToOne` vers `Dossier` (obligatoire)
- `@ManyToOne` vers `Modele` (optionnel)

**Champs de gestion fichiers :**
- `nomFichier`, `cheminStockage`, `dateCreation`
- `source` (IMPORTE/GENERE), `categorie`

### 5. **Modele**
```java
@Column(columnDefinition = "TEXT")
private String contenu;
```

**Utilité :** Templates pour génération automatique de documents avec variables `{{...}}`.

---

## 🗓️ Hiérarchie de Planification

### 6. **ElementPlanifiable** (Classe abstraite)
```java
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class ElementPlanifiable
```

**Champs communs :** `id`, `titre`, `description`, `priorite`

### 7. **EvenementCalendrier** (Classe abstraite)
```java
public abstract class EvenementCalendrier extends ElementPlanifiable
```

**Champs temporels :** `dateHeureDebut`, `dateHeureFin`

### 8. **Audience** (Entité concrète)
```java
public class Audience extends EvenementCalendrier
```

**Spécificité :** Champ `lieu` et relation obligatoire avec `Dossier`.

### 9. **RendezVous** (Entité concrète)
```java
public class RendezVous extends EvenementCalendrier
```

**Spécificités :**
- `typeLieu` (EN_LIGNE/SUR_PLACE)
- `statut` (DEMANDE/ACCEPTE/REJETE)
- Relations avec `demandeur` et `responsable`

### 10. **Tache** (Entité concrète)
```java
public class Tache extends ElementPlanifiable
```

**Spécificités :**
- `dateEcheance`, `statut`
- Relations avec `Dossier` et `assignee`

---

## 🗄️ Repositories

### Fonctionnalités CRUD de base
Tous les repositories étendent `JpaRepository<Entity, Long>` pour les opérations :
- `save()`, `findById()`, `findAll()`, `deleteById()`

### Méthodes personnalisées importantes

#### **DossierRepository**
```java
// Exigences métier critiques
List<Dossier> findByStatut(StatutDossier statut);
List<Dossier> findByStatutPaiement(StatutPaiementDossier statutPaiement);
```

#### **DocumentRepository**
```java
// Filtrage par catégorie et source - exigences importantes
List<Document> findByCategorie(String categorie);
List<Document> findBySource(SourceDocument source);
```

#### **TacheRepository**
```java
// Toutes les tâches assignées à un utilisateur - exigence importante
List<Tache> findByAssignee(Utilisateur assignee);
@Query("SELECT t FROM Tache t WHERE t.dateEcheance < :currentDate AND t.statut != 'TERMINEE'")
List<Tache> findOverdueTasks(@Param("currentDate") Date currentDate);
```

#### **RendezVousRepository**
```java
// RDV demandés/traités par utilisateur - exigences importantes
List<RendezVous> findByDemandeur(Utilisateur demandeur);
List<RendezVous> findByResponsable(Utilisateur responsable);
```

---

## 🔧 Annotations techniques expliquées

### **JPA/Hibernate**
- `@Entity` : Marque une classe comme entité persistante
- `@Table(name = "...")` : Spécifie le nom de table en BDD
- `@Id` + `@GeneratedValue` : Clé primaire auto-générée
- `@Column(nullable = false)` : Champ obligatoire en BDD
- `@Temporal(TemporalType.TIMESTAMP)` : Format date/heure complet

### **Relations**
- `@ManyToOne` : Plusieurs entités pointent vers une seule
- `@OneToMany` : Une entité possède plusieurs autres
- `@JoinColumn(name = "...")` : Spécifie la colonne de jointure
- `cascade = CascadeType.ALL` : Propagation des opérations
- `fetch = FetchType.LAZY` : Chargement paresseux (performance)

### **Lombok**
- `@Data` : Génère getters, setters, toString, equals, hashCode
- `@NoArgsConstructor` : Constructeur vide
- `@AllArgsConstructor` : Constructeur avec tous les paramètres
- `@EqualsAndHashCode(callSuper = true)` : Inclut les champs de la classe parent

### **Spring Data**
- `@Repository` : Composant Spring pour l'accès aux données
- `@Query` : Requêtes JPQL personnalisées
- `@Param` : Liaison des paramètres dans les requêtes

---

## 🎯 Fonctionnalités métier implémentées

### ✅ **Recherches par critères**
- Dossiers par statut (OUVERT/ARCHIVE)
- Dossiers par statut paiement (PAYE/NON_PAYE)
- Documents par catégorie et source
- Tâches assignées à un utilisateur
- RDV demandés/traités par utilisateur

### ✅ **Gestion temporelle**
- Tâches en retard
- Événements à venir
- Dates d'échéance

### ✅ **Relations complexes**
- Héritage multi-niveaux (Utilisateur → UtilisateurEntreprise)
- Hiérarchie abstraite (ElementPlanifiable → EvenementCalendrier → Audience/RendezVous)
- Relations bidirectionnelles avec cascade

---

## 🚀 Prochaines étapes

1. **Services** - Logique métier et validations
2. **DTOs** - Objets de transfert pour l'API
3. **Contrôleurs REST** - Endpoints HTTP
4. **Configuration Swagger** - Documentation API
5. **Gestion d'exceptions** - Retours d'erreur standardisés
6. **Tests unitaires** - Validation du code

---

## 📊 Statistiques du projet

- **10 entités** JPA avec héritage
- **8 énumérations** métier
- **7 repositories** avec 35+ méthodes personnalisées
- **Architecture modulaire** respectant les bonnes pratiques Spring Boot
- **Base PostgreSQL** configurée et testée
