import { Routes } from '@angular/router';
import {Home} from './home/home';
import {ProjectDetails} from './project-details/project-details';
import { Type } from '@angular/core';

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
    path: 'projects/:id',
    loadComponent: () =>
      import('./project-details/project-details').then(
        (m) => m.ProjectDetails as Type<unknown>
      ),
    data: {
      prerender: false, // or true with staticParams
    },
  },
];
