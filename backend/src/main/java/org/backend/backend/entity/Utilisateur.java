package org.backend.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.backend.backend.enums.RoleEnum;

@Entity
@Table(name = "utilisateur")
@Inheritance(strategy = InheritanceType.JOINED)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Utilisateur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String prenom;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String telephone;

    @Column(unique = true)
    private String email;

    @Column(nullable = false)
    private String motDePasseHash;

    @Column(nullable = false)
    private Boolean estActif = true;

    @Column(nullable = false)
    private Boolean doitChangerMdp = false;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RoleEnum role;

    // Champs optionnels pour clients particuliers
    private String adresse;
    private String ville;
    private String cinOuPasseport;
}
