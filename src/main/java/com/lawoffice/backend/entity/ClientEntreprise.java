package com.lawoffice.backend.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("ENTREPRISE")
public class ClientEntreprise extends User {

    private String codeFiscale;

    public String getCodeFiscale() {
        return codeFiscale;
    }

    public void setCodeFiscale(String codeFiscale) {
        this.codeFiscale = codeFiscale;
    }
}
