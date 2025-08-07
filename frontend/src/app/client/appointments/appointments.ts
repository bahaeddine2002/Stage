import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService, Appointment } from '../../shared/services/mock-data.service';

@Component({
  selector: 'app-appointments',
  imports: [CommonModule],
  templateUrl: './appointments.html',
  styleUrl: './appointments.css'
})
export class Appointments implements OnInit {
  appointments: Appointment[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    // TODO: Replace with actual API call
    this.mockDataService.getAppointments().subscribe(data => {
      this.appointments = data;
    });
  }

  getStatusClass(status: string): string {
    switch(status) {
      case 'Confirmed': return 'text-bg-success';
      case 'Scheduled': return 'text-bg-primary';
      case 'Completed': return 'text-bg-secondary';
      case 'Cancelled': return 'text-bg-danger';
      default: return 'text-bg-warning';
    }
  }

  getStatusIcon(status: string): string {
    switch(status) {
      case 'Confirmed': return 'bi-check-circle-fill';
      case 'Scheduled': return 'bi-calendar-check-fill';
      case 'Completed': return 'bi-check2-circle';
      case 'Cancelled': return 'bi-x-circle-fill';
      default: return 'bi-clock-fill';
    }
  }

  getTypeIcon(type: string): string {
    switch(type) {
      case 'Consultation': return 'bi-chat-dots';
      case 'Meeting': return 'bi-camera-video';
      case 'Court': return 'bi-building';
      case 'Deposition': return 'bi-file-earmark-text';
      default: return 'bi-calendar-event';
    }
  }
}
