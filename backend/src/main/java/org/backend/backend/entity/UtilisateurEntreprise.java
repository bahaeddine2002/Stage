package org.backend.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "utilisateur_entreprise")
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
public class UtilisateurEntreprise extends Utilisateur {
    @Column(nullable = false)
    private String nomEntreprise;

    @Column(nullable = false)
    private String codeFiscalite;
}
