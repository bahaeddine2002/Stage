package org.backend.backend.repository;

import org.backend.backend.entity.Modele;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ModeleRepository extends JpaRepository<Modele, Long> {

    Optional<Modele> findByNom(String nom);

    List<Modele> findByNomContainingIgnoreCase(String nom);

    boolean existsByNom(String nom);
}
