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
      // Optional: Explicitly set renderMode to 'prerender'
      renderMode: 'dynamic',
      // Define getPrerenderParams here
      getPrerenderParams: (route: { params: { [x: string]: any; }; }) => {
        // Return an object with the parameters for prerendering
        return { id: route.params['id'] };
      },
    },
  },
];
