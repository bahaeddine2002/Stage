package org.backend.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.backend.backend.enums.StatutTache;

import java.util.Date;

@Entity
@Table(name = "tache")
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
public class Tache extends ElementPlanifiable {

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date dateEcheance;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutTache statut = StatutTache.A_FAIRE;

    // Relations selon UML
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dossier_id", nullable = false)
    private Dossier dossier;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "assignee_id", nullable = false)
    private Utilisateur assignee;
}
