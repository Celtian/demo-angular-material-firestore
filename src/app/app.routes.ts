import { Routes } from '@angular/router';
import { ROUTE_DEFINITION } from './shared/constants/route-definition.constant';

export const routes: Routes = [
  {
    path: '',
    title: ROUTE_DEFINITION.APP.HOMEPAGE,
    loadComponent: () => import('./homepage/homepage.component').then((m) => m.HomepageComponent),
  },
  {
    path: '**',
    title: ROUTE_DEFINITION.APP.NOT_FOUND,
    loadComponent: () => import('./not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
