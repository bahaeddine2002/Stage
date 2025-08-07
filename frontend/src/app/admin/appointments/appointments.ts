import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockAdminService, AdminAppointment } from '../../shared/services/mock-admin.service';

@Component({
  selector: 'app-appointments',
  imports: [CommonModule],
  templateUrl: './appointments.html',
  styleUrl: './appointments.css'
})
export class Appointments implements OnInit {
  appointments: AdminAppointment[] = [];

  constructor(private adminService: MockAdminService) {}

  ngOnInit() {
    // TODO: Replace with REST API call
    this.adminService.getAppointments().subscribe(data => {
      this.appointments = data;
    });
  }

  getStatusClass(status: string): string {
    switch(status) {
      case 'Confirmed': return 'text-bg-success';
      case 'Pending': return 'text-bg-warning';
      case 'Declined': return 'text-bg-danger';
      default: return 'text-bg-secondary';
    }
  }

  updateStatus(appointmentId: string, status: 'Confirmed' | 'Declined') {
    // TODO: Replace with REST API call + SMS integration
    this.adminService.updateAppointmentStatus(appointmentId, status).subscribe(() => {
      const appointment = this.appointments.find(apt => apt.id === appointmentId);
      if (appointment) {
        appointment.status = status;
      }
      // TODO: Send SMS notification to client
      console.log(`SMS would be sent to client about ${status.toLowerCase()} appointment`);
    });
  }
}
