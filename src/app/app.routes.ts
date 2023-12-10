import { Routes } from '@angular/router';
import { postRoutes } from './post';
import { ROUTE_DEFINITION } from './shared/constants/route-definition.constant';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout-public').then((m) => m.LayoutPublicComponent),
    children: [
      {
        path: ROUTE_DEFINITION.APP.LOGIN,
        title: ROUTE_DEFINITION.APP.LOGIN,
        loadComponent: () => import('./login').then((m) => m.LoginComponent),
      },
      {
        path: ROUTE_DEFINITION.APP.REGISTER,
        title: ROUTE_DEFINITION.APP.REGISTER,
        loadComponent: () => import('./register').then((m) => m.RegisterComponent),
      },
    ],
  },
  {
    path: ROUTE_DEFINITION.APP.POSTS,
    loadComponent: () => import('./layout/layout-private').then((m) => m.LayoutPrivateComponent),
    children: postRoutes,
  },
  {
    path: '**',
    title: ROUTE_DEFINITION.APP.NOT_FOUND,
    loadComponent: () => import('./not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
