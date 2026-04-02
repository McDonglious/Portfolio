import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';

export interface Project {
  id: number;
  projectTitle: string;
  images: Array<{ url: string; alt: string }>;
  projectOverview: string;
  projectBackground: string;
  projectFeatures: Array<{ title: string; description: string }>;
  projectTechnologies: string[];
  projectDevelopmentProcess: string[];
  projectChallenges: Array<{ challenge: string; challengeDescription: string; solutionDescription: string }>;
  projectOutcomes: Array<{ title: string; description: string }>;
  projectLessons: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private cachedData: Project[] | null = null;

  constructor(private http: HttpClient) {}

  // Get all projects
  getProjects(): Observable<Project[]> {
    if (this.cachedData) {
      return of(this.cachedData);
    }
    return this.http.get<{ projects: Project[] }>('assets/data/db.json')
      .pipe(
        tap(data => this.cachedData = data.projects),
        map(data => data.projects) // Extract the projects array
      );
  }

  // Get single project by ID
  getProjectDetails(id: number): Observable<Project | undefined> {
    return this.getProjects().pipe(
      map(projects => projects.find(p => p.id === id))
    );
  }
}
