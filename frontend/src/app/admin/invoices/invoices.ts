import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockAdminService, AdminInvoice } from '../../shared/services/mock-admin.service';

@Component({
  selector: 'app-invoices',
  imports: [CommonModule],
  templateUrl: './invoices.html',
  styleUrl: './invoices.css'
})
export class Invoices implements OnInit {
  invoices: AdminInvoice[] = [];

  constructor(private adminService: MockAdminService) {}

  ngOnInit() {
    // TODO: Replace with REST API call
    this.adminService.getInvoices().subscribe(data => {
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

  markAsPaid(invoiceId: string) {
    // TODO: Replace with REST API call
    this.adminService.markInvoicePaid(invoiceId).subscribe(() => {
      const invoice = this.invoices.find(inv => inv.id === invoiceId);
      if (invoice) {
        invoice.status = 'Paid';
      }
    });
  }
}
