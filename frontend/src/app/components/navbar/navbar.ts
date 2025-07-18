import { Component, HostListener, AfterViewInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isLoginPage = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = this.router.url === '/login';
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.shrinkNavbar();
  }

  ngAfterViewInit(): void {
    this.shrinkNavbar();

    // Activate Bootstrap ScrollSpy
    const mainNav = document.querySelector('#mainNav');
    if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        rootMargin: '0px 0px -40%',
      });
    }

    // Collapse navbar on click (on mobile)
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarToggler.click();
        }
      });
    });
  }

  shrinkNavbar() {
    const navbar = document.querySelector('#mainNav');
    if (!navbar) return;

    if (window.scrollY === 0) {
      navbar.classList.remove('navbar-shrink');
    } else {
      navbar.classList.add('navbar-shrink');
    }
  }
}
