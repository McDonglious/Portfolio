import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [
    RouterLink
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  standalone: true
})
export class Projects {
  projects = [
    {
      id: 1,
      title: "Poker Game",
      description: "An online multiplayer poker platform with .NET 9 backend and React + Vite frontend. Players create accounts, customize profiles, and join tables with configurable buy-ins and blinds. Complex logic handles winner determination and pot distribution.",
      tags: [".NET 9", "React", "Vite", "PostgreSQL", "Identity Server", "Google Cloud"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "This website! Built with Angular, featuring a particle.js background, responsive design, and a focus on accessibility and performance.",
      tags: ["Angular", "TypeScript", "tsParticles"]
    },
    {
      id: 3,
      title: "SDM Framework",
      description: "A custom MVC framework with a Razor-like templating language, built with C# and ANTLR4.",
      tags: ["C#", "ANTLR4", "MVC"]
    },
    {
      id: 4,
      title: "Crew Roster",
      description: "A frontend application for managing ships and crew members, built with Webpack, EJS, and JSON Server. Demonstrates CRUD operations and dynamic data rendering.",
      tags: ["JavaScript", "EJS", "Webpack", "JSON Server", "CSS"]
    },
    {
      id: 5,
      title: "Phygital",
      description: "A dynamic polling system for creating interactive flows with subjects, sub-subjects, and dynamic question types. Built with .NET 8, Razor Pages, and PostgreSQL, deployed on Google Cloud with Identity Server for role-based access.",
      tags: [".NET 8", "Razor Pages", "PostgreSQL", "Identity Server", "Google Cloud", "Cloud Storage"]
    },
    {
      id: 6,
      title: "Point Cloud Annotation in VR",
      description: "A VR-based system for annotating 3D point clouds, designed to streamline the creation of training data for AI and autonomous vehicles. Users interact with point clouds in a virtual environment, enabling precise and efficient annotation.",
      tags: ["VR Development", "Point Cloud Processing", "TypeScript", "3D Rendering", "AI/ML Data Annotation"]
    }
  ];
}

