import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockAdminService, AdminNotification } from '../../shared/services/mock-admin.service';

@Component({
  selector: 'app-notifications',
  imports: [CommonModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications implements OnInit {
  notifications: AdminNotification[] = [];

  constructor(private adminService: MockAdminService) {}

  ngOnInit() {
    // TODO: Replace with REST API call
    this.adminService.getNotifications().subscribe(data => {
      this.notifications = data.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    });
  }

  markAllAsRead() {
    // TODO: Replace with REST API call
    this.notifications.forEach(notification => {
      notification.read = true;
    });
  }
}
