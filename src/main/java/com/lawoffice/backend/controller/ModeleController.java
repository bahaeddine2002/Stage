package com.lawoffice.backend.controller;

import com.lawoffice.backend.entity.Modele;
import com.lawoffice.backend.service.ModeleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/modeles")
public class ModeleController {

    private final ModeleService modeleService;

    public ModeleController(ModeleService modeleService) {
        this.modeleService = modeleService;
    }

    @GetMapping
    public List<Modele> getAllModeles() {
        return modeleService.getAllModeles();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Modele> getModeleById(@PathVariable Long id) {
        return modeleService.getModeleById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Modele createModele(@RequestBody Modele modele) {
        return modeleService.createModele(modele);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Modele> updateModele(@PathVariable Long id, @RequestBody Modele modele) {
        try {
            Modele updated = modeleService.updateModele(id, modele);
            return ResponseEntity.ok(updated);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteModele(@PathVariable Long id) {
        modeleService.deleteModele(id);
        return ResponseEntity.noContent().build();
    }
}
