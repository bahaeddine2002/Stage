package com.lawoffice.backend.repository;

import com.lawoffice.backend.entity.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Long> {
    // You can add custom queries here if needed
}
