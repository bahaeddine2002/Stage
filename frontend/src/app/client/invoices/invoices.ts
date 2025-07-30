import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoices',
  imports: [CommonModule],
  templateUrl: './invoices.html',
  styleUrl: './invoices.css'
})
export class Invoices {
  invoices = [
    { id: 'INV-2024-001', amount: '$2,500.00', status: 'Paid', dueDate: '2024-03-15', case: 'CASE-2024-001' },
    { id: 'INV-2024-002', amount: '$1,200.00', status: 'Pending', dueDate: '2024-03-20', case: 'CASE-2024-002' },
    { id: 'INV-2024-003', amount: '$850.00', status: 'Overdue', dueDate: '2024-02-28', case: 'CASE-2024-001' }
  ];

  getStatusClass(status: string): string {
    switch(status) {
      case 'Paid': return 'bg-success';
      case 'Pending': return 'bg-warning';
      case 'Overdue': return 'bg-danger';
      default: return 'bg-primary';
    }
  }
}
