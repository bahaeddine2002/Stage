import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService, Document } from '../../shared/services/mock-data.service';

@Component({
  selector: 'app-documents',
  imports: [CommonModule],
  templateUrl: './documents.html',
  styleUrl: './documents.css'
})
export class Documents implements OnInit {
  documents: Document[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    // TODO: Replace with actual API call
    this.mockDataService.getDocuments().subscribe(data => {
      this.documents = data;
    });
  }

  getFileIcon(type: string): string {
    switch(type.toLowerCase()) {
      case 'medical': return 'bi-file-medical';
      case 'legal': return 'bi-file-earmark-text';
      case 'employment': return 'bi-file-person';
      default: return 'bi-file-earmark';
    }
  }
}
