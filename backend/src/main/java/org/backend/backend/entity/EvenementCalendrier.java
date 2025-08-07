package org.backend.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "evenement_calendrier")
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
public abstract class EvenementCalendrier extends ElementPlanifiable {

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date dateHeureDebut;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date dateHeureFin;
}
