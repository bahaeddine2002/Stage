import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, Navbar],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';
  selectedRole = '';

  constructor(private router: Router) {}

  onLogin() {
    // Pure navigation based on role selection - no authentication
    if (this.selectedRole === 'Client') {
      this.router.navigate(['/client']);
    } else if (this.selectedRole === 'Admin') {
      this.router.navigate(['/admin']);
    }
  }
}
