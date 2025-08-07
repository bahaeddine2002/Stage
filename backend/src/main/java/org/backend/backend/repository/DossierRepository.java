package org.backend.backend.repository;

import org.backend.backend.entity.Dossier;
import org.backend.backend.entity.Utilisateur;
import org.backend.backend.enums.StatutDossier;
import org.backend.backend.enums.StatutPaiementDossier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DossierRepository extends JpaRepository<Dossier, Long> {

    // Recherche par statut - exigence importante
    List<Dossier> findByStatut(StatutDossier statut);

    // Recherche par statut paiement - exigence importante
    List<Dossier> findByStatutPaiement(StatutPaiementDossier statutPaiement);

    // Combinaison statut + paiement
    List<Dossier> findByStatutAndStatutPaiement(StatutDossier statut, StatutPaiementDossier statutPaiement);

    // Dossiers d'un client
    List<Dossier> findByClient(Utilisateur client);

    // Dossiers gérés par un admin
    List<Dossier> findByAdmin(Utilisateur admin);

    // Recherche par type de dossier
    List<Dossier> findByTypeDossierContainingIgnoreCase(String typeDossier);

    @Query("SELECT d FROM Dossier d WHERE d.client.id = :clientId AND d.statut = :statut")
    List<Dossier> findByClientIdAndStatut(@Param("clientId") Long clientId, @Param("statut") StatutDossier statut);
}
