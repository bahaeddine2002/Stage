package com.lawoffice.backend.repository;

import com.lawoffice.backend.entity.Dossier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DossierRepository extends JpaRepository<Dossier, Long> {
    // You can add custom queries here if needed
}
