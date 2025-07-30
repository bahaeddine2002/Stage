import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documents',
  imports: [CommonModule],
  templateUrl: './documents.html',
  styleUrl: './documents.css'
})
export class Documents {
  documents = [
    { name: 'Medical_Records_2024.pdf', type: 'PDF', size: '2.4 MB', uploaded: '2024-03-10', case: 'CASE-2024-001' },
    { name: 'Contract_Agreement.docx', type: 'Word', size: '156 KB', uploaded: '2024-03-08', case: 'CASE-2024-002' },
    { name: 'Evidence_Photos.zip', type: 'Archive', size: '15.2 MB', uploaded: '2024-03-05', case: 'CASE-2024-001' }
  ];
}
