package org.backend.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.backend.backend.enums.TypeLieuRdv;
import org.backend.backend.enums.StatutRdv;

@Entity
@Table(name = "rendez_vous")
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
public class RendezVous extends EvenementCalendrier {

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TypeLieuRdv typeLieu;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutRdv statut = StatutRdv.DEMANDE;

    // Relations selon UML
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "demandeur_id", nullable = false)
    private Utilisateur demandeur;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "responsable_id", nullable = false)
    private Utilisateur responsable;
}
