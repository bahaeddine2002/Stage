package org.backend.backend.repository;

import org.backend.backend.entity.Tache;
import org.backend.backend.entity.Utilisateur;
import org.backend.backend.entity.Dossier;
import org.backend.backend.enums.StatutTache;
import org.backend.backend.enums.Priorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface TacheRepository extends JpaRepository<Tache, Long> {

    // Toutes les tâches assignées à un utilisateur - exigence importante
    List<Tache> findByAssignee(Utilisateur assignee);

    // Tâches par statut
    List<Tache> findByStatut(StatutTache statut);

    // Tâches par priorité
    List<Tache> findByPriorite(Priorite priorite);

    // Tâches d'un dossier
    List<Tache> findByDossier(Dossier dossier);

    // Tâches assignées à un utilisateur avec un statut spécifique
    List<Tache> findByAssigneeAndStatut(Utilisateur assignee, StatutTache statut);

    // Tâches en retard (date échéance passée)
    @Query("SELECT t FROM Tache t WHERE t.dateEcheance < :currentDate AND t.statut != 'TERMINEE'")
    List<Tache> findOverdueTasks(@Param("currentDate") Date currentDate);

    // Tâches à venir pour un utilisateur
    @Query("SELECT t FROM Tache t WHERE t.assignee.id = :userId AND t.dateEcheance >= :currentDate AND t.statut != 'TERMINEE'")
    List<Tache> findUpcomingTasksForUser(@Param("userId") Long userId, @Param("currentDate") Date currentDate);
}
