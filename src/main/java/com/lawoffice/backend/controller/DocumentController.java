package com.lawoffice.backend.controller;

import com.lawoffice.backend.entity.Document;
import com.lawoffice.backend.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/documents")
@CrossOrigin(origins = "*") // or specify your frontend URL
public class DocumentController {

    @Autowired
    private DocumentService documentService;

    @PostMapping
    public Document create(@RequestBody Document document) {
        return documentService.createDocument(document);
    }

    @GetMapping
    public List<Document> getAll() {
        return documentService.getAllDocuments();
    }

    @GetMapping("/{id}")
    public Document getById(@PathVariable Long id) {
        return documentService.getDocumentById(id);
    }

    @PutMapping("/{id}")
    public Document update(@PathVariable Long id, @RequestBody Document document) {
        return documentService.updateDocument(id, document);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        documentService.deleteDocument(id);
    }
}
