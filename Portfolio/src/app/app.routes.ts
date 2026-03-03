import { Routes } from '@angular/router';
import {Tutdetails} from './tutorial/tutdetails/tutdetails';
import {Home} from './home/home';

export const routes: Routes = [{
    path: '',
    component: Home,
    title: 'home page',
  },
  {
    path: 'tutdetails/:id',
    component: Tutdetails,
    title: 'Tuthome tutdetails',
  },
];
