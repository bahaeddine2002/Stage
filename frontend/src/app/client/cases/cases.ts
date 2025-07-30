import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cases',
  imports: [CommonModule],
  templateUrl: './cases.html',
  styleUrl: './cases.css'
})
export class Cases {
  cases = [
    { id: 'CASE-2024-001', title: 'Personal Injury Claim', status: 'Active', attorney: 'Sarah Johnson', lastUpdate: '2024-03-10' },
    { id: 'CASE-2024-002', title: 'Contract Dispute', status: 'Pending', attorney: 'Michael Brown', lastUpdate: '2024-03-08' },
    { id: 'CASE-2023-015', title: 'Employment Issue', status: 'Closed', attorney: 'Sarah Johnson', lastUpdate: '2024-02-28' }
  ];

  getStatusClass(status: string): string {
    switch(status) {
      case 'Active': return 'bg-success';
      case 'Pending': return 'bg-warning';
      case 'Closed': return 'bg-secondary';
      default: return 'bg-primary';
    }
  }
}
