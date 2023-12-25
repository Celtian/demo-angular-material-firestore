import { redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Route, Routes } from '@angular/router';
import { postRoutes } from './post';
import { ROUTE_DEFINITION } from './shared/constants/route-definition.constant';
import { titleResolverFactory } from './shared/factories/title.factory';
import { CustomAuthGuard } from './shared/guards/custom-auth-guard.service';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(`/${ROUTE_DEFINITION.APP.LOGIN}`);
const redirectAuthorizedToPosts = () => redirectLoggedInTo(`/${ROUTE_DEFINITION.APP.POSTS}`);

const notFound: Route = {
  path: '**',
  title: titleResolverFactory({
    description: ROUTE_DEFINITION.APP.NOT_FOUND,
    section: ['not-found'],
  }),
  loadComponent: () => import('./not-found/not-found.component').then((m) => m.NotFoundComponent),
};

export const routes: Routes = [
  {
    path: ROUTE_DEFINITION.APP.POSTS,
    canActivate: [CustomAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadComponent: () => import('./layout/layout-private').then((m) => m.LayoutPrivateComponent),
    children: [...postRoutes, notFound],
  },
  {
    path: '',
    canActivate: [CustomAuthGuard],
    data: { authGuardPipe: redirectAuthorizedToPosts },
    loadComponent: () => import('./layout/layout-public').then((m) => m.LayoutPublicComponent),
    children: [
      {
        path: ROUTE_DEFINITION.APP.LOGIN,
        title: titleResolverFactory({
          description: ROUTE_DEFINITION.APP.LOGIN,
          section: ['login'],
        }),
        loadComponent: () => import('./login').then((m) => m.LoginComponent),
      },
      {
        path: ROUTE_DEFINITION.APP.REGISTER,
        title: titleResolverFactory({
          description: ROUTE_DEFINITION.APP.REGISTER,
          section: ['register'],
        }),
        loadComponent: () => import('./register').then((m) => m.RegisterComponent),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: ROUTE_DEFINITION.APP.LOGIN,
      },
      notFound,
    ],
  },
];
