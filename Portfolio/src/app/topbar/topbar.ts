import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
  standalone: true
})
export class Topbar {
  constructor(private router: Router) {}

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onPortfolioClick(): void {
    this.scrollToTop();
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    }
  }
}
