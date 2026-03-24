import { Routes } from '@angular/router';
import {Home} from './home/home';
import {ProjectDetails} from './project-details/project-details';

export const routes: Routes = [{
    path: '',
    component: Home,
    title: 'home page',
  },
  {
    path: 'projects/:id',
    component: ProjectDetails,
    title: 'Projects Details',
  },
  {
    path: 'portfolio/:id',
    component: ProjectDetails,
    data: {
      renderMode: 'server', // Render dynamically
      // No getPrerenderParams needed
    },
  },
];
