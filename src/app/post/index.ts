import { Routes } from '@angular/router';
import { ROUTE_DEFINITION } from '../shared/constants/route-definition.constant';
import { CanDeactivateGuardService } from '../shared/guards/can-deactivate-guard.service';

export const postRoutes: Routes = [
  {
    path: '',
    title: ROUTE_DEFINITION.APP.POSTS,
    loadComponent: () => import('./post-list').then((m) => m.PostListComponent),
  },
  {
    path: ROUTE_DEFINITION.POSTS.CREATE,
    title: ROUTE_DEFINITION.POSTS.CREATE,
    canDeactivate: [CanDeactivateGuardService],
    loadComponent: () => import('./post-create').then((m) => m.PostCreateComponent),
  },
  {
    path: ':id',
    title: ROUTE_DEFINITION.POSTS.DETAIL,
    loadComponent: () => import('./post-detail').then((m) => m.PostDetailComponent),
  },
  {
    path: `:id/${ROUTE_DEFINITION.POSTS.EDIT}`,
    title: ROUTE_DEFINITION.POSTS.EDIT,
    canDeactivate: [CanDeactivateGuardService],
    loadComponent: () => import('./post-edit').then((m) => m.PostEditComponent),
  },
];
