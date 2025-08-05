package com.lawoffice.backend.service;

import com.lawoffice.backend.entity.Modele;
import com.lawoffice.backend.repository.ModeleRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ModeleService {

    private final ModeleRepository modeleRepository;

    public ModeleService(ModeleRepository modeleRepository) {
        this.modeleRepository = modeleRepository;
    }

    public List<Modele> getAllModeles() {
        return modeleRepository.findAll();
    }

    public Optional<Modele> getModeleById(Long id) {
        return modeleRepository.findById(id);
    }

    public Modele createModele(Modele modele) {
        return modeleRepository.save(modele);
    }

    public Modele updateModele(Long id, Modele updatedModele) {
        return modeleRepository.findById(id)
                .map(existing -> {
                    existing.setNom(updatedModele.getNom());
                    existing.setContenu(updatedModele.getContenu());
                    return modeleRepository.save(existing);
                })
                .orElseThrow(() -> new RuntimeException("Modele not found with id " + id));
    }

    public void deleteModele(Long id) {
        modeleRepository.deleteById(id);
    }
}
