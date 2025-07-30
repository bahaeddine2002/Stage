import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  kpiData = {
    openCases: 3,
    unpaidInvoices: 2,
    nextAppointment: 'Mar 15, 2024 at 2:00 PM'
  };
}
