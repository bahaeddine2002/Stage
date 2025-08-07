package org.backend.backend.repository;

import org.backend.backend.entity.RendezVous;
import org.backend.backend.entity.Utilisateur;
import org.backend.backend.enums.StatutRdv;
import org.backend.backend.enums.TypeLieuRdv;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface RendezVousRepository extends JpaRepository<RendezVous, Long> {

    // Tous les RDV demandés par un utilisateur - exigence importante
    List<RendezVous> findByDemandeur(Utilisateur demandeur);

    // Tous les RDV traités par un utilisateur - exigence importante
    List<RendezVous> findByResponsable(Utilisateur responsable);

    // RDV par statut
    List<RendezVous> findByStatut(StatutRdv statut);

    // RDV par type de lieu
    List<RendezVous> findByTypeLieu(TypeLieuRdv typeLieu);

    // RDV demandés par utilisateur avec statut spécifique
    List<RendezVous> findByDemandeurAndStatut(Utilisateur demandeur, StatutRdv statut);

    // RDV traités par responsable avec statut spécifique
    List<RendezVous> findByResponsableAndStatut(Utilisateur responsable, StatutRdv statut);

    // RDV à venir pour un utilisateur (demandeur ou responsable)
    @Query("SELECT r FROM RendezVous r WHERE (r.demandeur.id = :userId OR r.responsable.id = :userId) AND r.dateHeureDebut >= :currentDate")
    List<RendezVous> findUpcomingRendezVousForUser(@Param("userId") Long userId, @Param("currentDate") Date currentDate);
}
