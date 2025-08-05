package com.lawoffice.backend.service;

import com.lawoffice.backend.entity.Dossier;
import com.lawoffice.backend.repository.DossierRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DossierService {

    private final DossierRepository dossierRepository;

    public DossierService(DossierRepository dossierRepository) {
        this.dossierRepository = dossierRepository;
    }

    public List<Dossier> getAllDossiers() {
        return dossierRepository.findAll();
    }

    public Optional<Dossier> getDossierById(Long id) {
        return dossierRepository.findById(id);
    }

    public Dossier createDossier(Dossier dossier) {
        return dossierRepository.save(dossier);
    }

    public Dossier updateDossier(Long id, Dossier updatedDossier) {
        return dossierRepository.findById(id)
                .map(dossier -> {
                    dossier.setTitre(updatedDossier.getTitre());
                    dossier.setTypeDossier(updatedDossier.getTypeDossier());
                    dossier.setStatut(updatedDossier.getStatut());
                    dossier.setDateMiseAJour(updatedDossier.getDateMiseAJour());
                    dossier.setMontantDu(updatedDossier.getMontantDu());
                    dossier.setStatutPaiement(updatedDossier.getStatutPaiement());
                    dossier.setUser(updatedDossier.getUser());
                    dossier.setClient(updatedDossier.getClient());
                    return dossierRepository.save(dossier);
                })
                .orElseThrow(() -> new RuntimeException("Dossier not found"));
    }

    public void deleteDossier(Long id) {
        dossierRepository.deleteById(id);
    }
}
