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
    path: 'projects/:id',
    loadChildren: () => import('./project-details/project-details').then(m => m.ProjectDetails),
    data: {
      // Define prerendering parameters for the route
      getPrerenderParams: (route: { params: { [x: string]: any } }) =>
        [
          { id: route.params['1'] },
          { id: route.params['2']}
        ] // Example: Prerender for specific IDs
    }
  }
];
