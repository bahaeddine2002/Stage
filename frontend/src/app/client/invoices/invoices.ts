import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService, Invoice } from '../../shared/services/mock-data.service';

@Component({
  selector: 'app-invoices',
  imports: [CommonModule],
  templateUrl: './invoices.html',
  styleUrl: './invoices.css'
})
export class Invoices implements OnInit {
  invoices: Invoice[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    // TODO: Replace with actual API call
    this.mockDataService.getInvoices().subscribe(data => {
      this.invoices = data;
    });
  }

  getStatusClass(status: string): string {
    switch(status) {
      case 'Paid': return 'text-bg-success';
      case 'Pending': return 'text-bg-warning';
      case 'Overdue': return 'text-bg-danger';
      default: return 'text-bg-primary';
    }
  }

  getStatusIcon(status: string): string {
    switch(status) {
      case 'Paid': return 'bi-check-circle-fill';
      case 'Pending': return 'bi-clock-fill';
      case 'Overdue': return 'bi-exclamation-triangle-fill';
      default: return 'bi-circle-fill';
    }
  }

  isOverdue(dueDate: string, status: string): boolean {
    if (status === 'Paid') return false;
    return new Date(dueDate) < new Date();
  }
}
