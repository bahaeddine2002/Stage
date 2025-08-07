package org.backend.backend.repository;

import org.backend.backend.entity.Audience;
import org.backend.backend.entity.Dossier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface AudienceRepository extends JpaRepository<Audience, Long> {

    // Audiences d'un dossier
    List<Audience> findByDossier(Dossier dossier);

    // Audiences par lieu
    List<Audience> findByLieuContainingIgnoreCase(String lieu);

    // Audiences à venir
    @Query("SELECT a FROM Audience a WHERE a.dateHeureDebut >= :currentDate ORDER BY a.dateHeureDebut ASC")
    List<Audience> findUpcomingAudiences(@Param("currentDate") Date currentDate);

    // Audiences d'un dossier à venir
    @Query("SELECT a FROM Audience a WHERE a.dossier.id = :dossierId AND a.dateHeureDebut >= :currentDate")
    List<Audience> findUpcomingAudiencesByDossier(@Param("dossierId") Long dossierId, @Param("currentDate") Date currentDate);
}
