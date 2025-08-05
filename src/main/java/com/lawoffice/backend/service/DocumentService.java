package com.lawoffice.backend.service;

import com.lawoffice.backend.entity.Document;

import java.util.List;

public interface DocumentService {
    Document createDocument(Document document);
    Document getDocumentById(Long id);
    List<Document> getAllDocuments();
    Document updateDocument(Long id, Document document);
    void deleteDocument(Long id);
}
