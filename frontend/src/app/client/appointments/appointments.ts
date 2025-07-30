import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments',
  imports: [CommonModule],
  templateUrl: './appointments.html',
  styleUrl: './appointments.css'
})
export class Appointments {
  appointments = [
    { id: 'APT-001', title: 'Initial Consultation', date: '2024-03-15', time: '2:00 PM', attorney: 'Sarah Johnson', type: 'In-Person', status: 'Confirmed' },
    { id: 'APT-002', title: 'Case Review Meeting', date: '2024-03-22', time: '10:30 AM', attorney: 'Michael Brown', type: 'Video Call', status: 'Pending' },
    { id: 'APT-003', title: 'Document Signing', date: '2024-03-28', time: '4:00 PM', attorney: 'Sarah Johnson', type: 'In-Person', status: 'Scheduled' }
  ];

  getStatusClass(status: string): string {
    switch(status) {
      case 'Confirmed': return 'bg-success';
      case 'Pending': return 'bg-warning';
      case 'Scheduled': return 'bg-primary';
      default: return 'bg-secondary';
    }
  }
}
