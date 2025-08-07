import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MockAdminService, AdminKPIData } from '../../shared/services/mock-admin.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  kpiData: AdminKPIData = { openCases: 0, pendingInvoiceTotal: '', upcomingAppointments: 0, templatesToReview: 0 };
  currentDate = new Date();

  constructor(private adminService: MockAdminService) {}

  ngOnInit() {
    // TODO: Replace with REST API call
    this.adminService.getKPIData().subscribe(data => {
      this.kpiData = data;
    });
  }
}
