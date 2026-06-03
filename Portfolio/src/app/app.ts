import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import {ParticlesBackground} from './particles-background/particles-background';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParticlesBackground],
  template: `
    <app-particles-background/>
    <main>
      <router-outlet/>
    </main>
  `,
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');
}


