import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MockAdminService } from '../../shared/services/mock-admin.service';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout implements OnInit {
  unreadCount = 0;

  constructor(private adminService: MockAdminService) {}

  ngOnInit() {
    // TODO: Replace with REST API call
    this.adminService.getNotifications().subscribe(notifications => {
      this.unreadCount = notifications.filter(n => !n.read).length;
    });
  }
}
