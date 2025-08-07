package org.backend.backend.repository;

import org.backend.backend.entity.Document;
import org.backend.backend.entity.Dossier;
import org.backend.backend.enums.SourceDocument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Long> {

    // Filtrage par catégorie - exigence importante
    List<Document> findByCategorie(String categorie);

    // Filtrage par source - exigence importante
    List<Document> findBySource(SourceDocument source);

    // Combinaison catégorie + source
    List<Document> findByCategorieAndSource(String categorie, SourceDocument source);

    // Documents d'un dossier
    List<Document> findByDossier(Dossier dossier);

    // Recherche par nom de fichier
    List<Document> findByNomFichierContainingIgnoreCase(String nomFichier);

    @Query("SELECT d FROM Document d WHERE d.dossier.id = :dossierId AND d.source = :source")
    List<Document> findByDossierIdAndSource(@Param("dossierId") Long dossierId, @Param("source") SourceDocument source);
}
