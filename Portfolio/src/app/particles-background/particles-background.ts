import { Component,Inject, PLATFORM_ID } from '@angular/core';
import {isPlatformBrowser, NgIf} from '@angular/common';
import {NgParticlesService, NgxParticlesModule} from "@tsparticles/angular";
import {Container, Engine, MoveDirection, OutMode} from "@tsparticles/engine";
import {loadSlim} from '@tsparticles/slim';

@Component({
  selector: 'app-particles-background',
  template: `
    <ngx-particles
      *ngIf="isBrowser"
      [id]="id"
      [options]="particlesOptions"
      (particlesLoaded)="particlesLoaded($event)"
    ></ngx-particles>
  `,
  standalone: true,
  imports: [
    NgxParticlesModule,
    NgIf,
  ],
  styleUrls: ['./particles-background.scss']
})
export class ParticlesBackground{
  id = "tsparticles";
  isBrowser = false;

  particlesOptions = {
    background: {
      color: {
        value: "#222222",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false
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
          distance: 150,
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
        distance: 100,
        enable: true,
        opacity: 0.5,
        width: 0.5,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 600,
        },
        value: 80,
      },
      opacity: {
        value: 0.6,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
      orbit: {
        enable: true,
        distance: 200
      }
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
