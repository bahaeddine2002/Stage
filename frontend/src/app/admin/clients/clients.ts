import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MockAdminService, AdminClient } from '../../shared/services/mock-admin.service';

@Component({
  selector: 'app-clients',
  imports: [CommonModule, FormsModule],
  templateUrl: './clients.html',
  styleUrl: './clients.css'
})
export class Clients implements OnInit {
  clients: AdminClient[] = [];
  filteredClients: AdminClient[] = [];
  searchTerm = '';
  filterType = '';
  
  newClient: Partial<AdminClient> = {
    name: '',
    email: '',
    phone: '',
    clientType: 'Individuel'
  };

  constructor(private adminService: MockAdminService) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    // TODO: Replace with REST API call
    this.adminService.getClients().subscribe(data => {
      this.clients = data;
      this.applyFilters();
    });
  }

  applyFilters() {
    this.filteredClients = this.clients.filter(client => {
      const matchesSearch = !this.searchTerm || 
        client.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesType = !this.filterType || client.clientType === this.filterType;
      
      return matchesSearch && matchesType;
    });
  }

  clearFilters() {
    this.searchTerm = '';
    this.filterType = '';
    this.applyFilters();
  }

  saveClient() {
    // TODO: Replace with REST API call
    this.adminService.addClient(this.newClient).subscribe(() => {
      this.loadClients();
      this.resetForm();
      // Close modal programmatically
      const modal = document.getElementById('clientModal');
      if (modal) {
        const bootstrapModal = (window as any).bootstrap.Modal.getInstance(modal);
        bootstrapModal?.hide();
      }
    });
  }

  resetForm() {
    this.newClient = {
      name: '',
      email: '',
      phone: '',
      clientType: 'Individuel'
    };
  }
}
