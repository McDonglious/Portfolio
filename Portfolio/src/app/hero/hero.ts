import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  standalone: true
})
export class Hero {
  scrollToProjects() {
    const projectsSection = document.querySelector('.projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  }
}
