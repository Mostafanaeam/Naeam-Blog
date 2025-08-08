import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, ThemeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  isScrolled = false;
// Inject the Router to listen for navigation events
   constructor(private router: Router) {
    // Subscribe to router events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Scroll to top when navigation ends
        window.scrollTo(0, 0);
      }
    });
  }
// Listen to window scroll events to change navbar style
  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }
// Toggle the mobile menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
// Close the mobile menu
  closeMenu() {
    this.isMenuOpen = false;
  }

  isMobileMenuActive: boolean = false;

  toggleMobileMenu(): void {
    this.isMobileMenuActive = !this.isMobileMenuActive;
    const navbarLinks = document.querySelector('.navbar-links');
    if (navbarLinks) {
      navbarLinks.classList.toggle('active', this.isMobileMenuActive);
      const mobileMenuButton = document.querySelector('.mobile-menu-button');
      mobileMenuButton?.classList.toggle('active', this.isMobileMenuActive);
    }
  }
}
