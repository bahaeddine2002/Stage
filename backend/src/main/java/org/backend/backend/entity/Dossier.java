package org.backend.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.backend.backend.enums.StatutDossier;
import org.backend.backend.enums.StatutPaiementDossier;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "dossier")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Dossier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titre;

    @Column(nullable = false)
    private String typeDossier;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutDossier statut = StatutDossier.OUVERT;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date dateCreation = new Date();

    @Temporal(TemporalType.TIMESTAMP)
    private Date dateMiseAJour = new Date();

    private Double montantDu;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutPaiementDossier statutPaiement = StatutPaiementDossier.NON_PAYE;

    // Relations
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id", nullable = false)
    private Utilisateur client;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "admin_id", nullable = false)
    private Utilisateur admin;

    @OneToMany(mappedBy = "dossier", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Document> documents;

    @OneToMany(mappedBy = "dossier", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Audience> audiences;

    @OneToMany(mappedBy = "dossier", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Tache> taches;
}
