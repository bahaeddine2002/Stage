package org.backend.backend.repository;

import org.backend.backend.entity.Utilisateur;
import org.backend.backend.enums.RoleEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {

    Optional<Utilisateur> findByUsername(String username);

    Optional<Utilisateur> findByEmail(String email);

    List<Utilisateur> findByRole(RoleEnum role);

    List<Utilisateur> findByEstActif(Boolean estActif);

    @Query("SELECT u FROM Utilisateur u WHERE u.role = :role AND u.estActif = true")
    List<Utilisateur> findActiveUsersByRole(@Param("role") RoleEnum role);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);
}
