import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService, Case } from '../../shared/services/mock-data.service';

@Component({
  selector: 'app-cases',
  imports: [CommonModule],
  templateUrl: './cases.html',
  styleUrl: './cases.css'
})
export class Cases implements OnInit {
  cases: Case[] = [];

  constructor(private mockDataService: MockDataService) { }

  ngOnInit() {
    // TODO: Replace with actual API call
    this.mockDataService.getCases().subscribe(data => {
      this.cases = data;
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Active': return 'text-bg-success';
      case 'Pending': return 'text-bg-warning';
      case 'Closed': return 'text-bg-secondary';
      default: return 'text-bg-primary';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'Active': return 'bi-check-circle-fill';
      case 'Pending': return 'bi-clock-fill';
      case 'Closed': return 'bi-x-circle-fill';
      default: return 'bi-circle-fill';
    }
  }
}
