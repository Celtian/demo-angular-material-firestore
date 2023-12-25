import { Routes } from '@angular/router';
import { ROUTE_DEFINITION } from '../shared/constants/route-definition.constant';
import { titleResolverFactory } from '../shared/factories/title.factory';
import { CanDeactivateGuardService } from '../shared/guards/can-deactivate-guard.service';

export const postRoutes: Routes = [
  {
    path: '',
    title: titleResolverFactory({
      description: ROUTE_DEFINITION.APP.POSTS,
      section: ['posts'],
      action: ['list'],
    }),
    loadComponent: () => import('./post-list').then((m) => m.PostListComponent),
  },
  {
    path: ROUTE_DEFINITION.POSTS.CREATE,
    title: titleResolverFactory({
      description: ROUTE_DEFINITION.POSTS.CREATE,
      section: ['posts'],
      action: ['create'],
    }),
    canDeactivate: [CanDeactivateGuardService],
    loadComponent: () => import('./post-create').then((m) => m.PostCreateComponent),
  },
  {
    path: ':id',
    title: titleResolverFactory({
      description: ROUTE_DEFINITION.POSTS.DETAIL,
      section: ['posts'],
      action: ['detail'],
      identifier: 'id',
    }),
    loadComponent: () => import('./post-detail').then((m) => m.PostDetailComponent),
  },
  {
    path: `:id/${ROUTE_DEFINITION.POSTS.EDIT}`,
    title: titleResolverFactory({
      description: ROUTE_DEFINITION.POSTS.EDIT,
      section: ['posts'],
      action: ['edit'],
      identifier: 'id',
    }),
    canDeactivate: [CanDeactivateGuardService],
    loadComponent: () => import('./post-edit').then((m) => m.PostEditComponent),
  },
];
