import { Component, signal, Inject, PLATFORM_ID } from '@angular/core';
import {isPlatformBrowser, NgIf} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MoveDirection, OutMode, Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { NgParticlesService, NgxParticlesModule } from "@tsparticles/angular";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxParticlesModule, NgIf],
  template: `
    <ngx-particles
      *ngIf="isBrowser"
      [id]="id"
      [options]="particlesOptions"
      (particlesLoaded)="particlesLoaded($event)"
    ></ngx-particles>
    <main>
      <section class="content">
        <router-outlet/>
      </section>
    </main>
  `,
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');
  id = "tsparticles";
  isBrowser = false;

  particlesOptions = {
    background: {
      color: {
        value: "#222222", // Dark grey background
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#4dabf7", // Soft blue particles
      },
      links: {
        color: "#74b9ff", // Lighter blue links
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 4,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 600,
        },
        value: 40,
      },
      opacity: {
        value: 0.6, // Slightly more opaque for better visibility
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };


  constructor(
    private readonly ngParticlesService: NgParticlesService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.ngParticlesService.init(async (engine: Engine) => {
        await loadSlim(engine);
      });
    }
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }
}


