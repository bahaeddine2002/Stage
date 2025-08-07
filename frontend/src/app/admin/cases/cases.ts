import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockAdminService, AdminCase } from '../../shared/services/mock-admin.service';

@Component({
  selector: 'app-cases',
  imports: [CommonModule],
  templateUrl: './cases.html',
  styleUrl: './cases.css'
})
export class Cases implements OnInit {
  cases: AdminCase[] = [];
  filteredCases: AdminCase[] = [];
  filterType = '';
  filterStatus = '';
  filterPaid: boolean | null = null;

  constructor(private adminService: MockAdminService) {}

  ngOnInit() {
    this.loadCases();
  }

  loadCases() {
    // TODO: Replace with REST API call
    this.adminService.getCases().subscribe(data => {
      this.cases = data;
      this.applyFilters();
    });
  }

  setFilter(type: string, value: any) {
    switch(type) {
      case 'type':
        this.filterType = value;
        break;
      case 'status':
        this.filterStatus = value;
        break;
      case 'paid':
        this.filterPaid = value;
        break;
    }
    this.applyFilters();
  }

  applyFilters() {
    this.filteredCases = this.cases.filter(caseItem => {
      const matchesType = !this.filterType || caseItem.type === this.filterType;
      const matchesStatus = !this.filterStatus || caseItem.status === this.filterStatus;
      const matchesPaid = this.filterPaid === null || caseItem.paid === this.filterPaid;
      
      return matchesType && matchesStatus && matchesPaid;
    });
  }

  getStatusClass(status: string): string {
    switch(status) {
      case 'Active': return 'text-bg-success';
      case 'Pending': return 'text-bg-warning';
      case 'Closed': return 'text-bg-secondary';
      default: return 'text-bg-primary';
    }
  }

  getStatusIcon(status: string): string {
    switch(status) {
      case 'Active': return 'bi-check-circle-fill';
      case 'Pending': return 'bi-clock-fill';
      case 'Closed': return 'bi-x-circle-fill';
      default: return 'bi-circle-fill';
    }
  }
}
