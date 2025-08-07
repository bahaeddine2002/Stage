import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService, KPIData } from '../../shared/services/mock-data.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  kpiData: KPIData = { openCases: 0, unpaidInvoices: 0, nextAppointment: '' };
  currentDate = new Date();

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    // TODO: Replace with actual API call
    this.mockDataService.getKPIData().subscribe(data => {
      this.kpiData = data;
    });
  }
}
