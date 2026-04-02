import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Project, ProjectService} from '../service/project-service';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  standalone: true
})
export class Projects implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }
}

