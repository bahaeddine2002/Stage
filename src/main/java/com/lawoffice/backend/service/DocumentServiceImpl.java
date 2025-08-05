package com.lawoffice.backend.service;

import com.lawoffice.backend.entity.Document;
import com.lawoffice.backend.repository.DocumentRepository;
import com.lawoffice.backend.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DocumentServiceImpl implements DocumentService {

    @Autowired
    private DocumentRepository documentRepository;

    @Override
    public Document createDocument(Document document) {
        return documentRepository.save(document);
    }

    @Override
    public Document getDocumentById(Long id) {
        return documentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Document not found with id " + id));
    }

    @Override
    public List<Document> getAllDocuments() {
        return documentRepository.findAll();
    }

    @Override
    public Document updateDocument(Long id, Document document) {
        Document existing = getDocumentById(id);
        existing.setNomFichier(document.getNomFichier());
        existing.setCheminStockage(document.getCheminStockage());
        existing.setDateCreation(document.getDateCreation());
        existing.setSource(document.getSource());
        existing.setDossier(document.getDossier());
        existing.setModele(document.getModele());
        return documentRepository.save(existing);
    }

    @Override
    public void deleteDocument(Long id) {
        documentRepository.deleteById(id);
    }
}
