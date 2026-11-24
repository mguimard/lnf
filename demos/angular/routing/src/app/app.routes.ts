import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    //component: Home,
    loadComponent: () => import('./pages/home/home').then((module) => module.Home),
    pathMatch: 'full',
  },
  {
    path: 'users',
    //component: Users,
    loadComponent: () => import('./pages/users/users').then((module) => module.Users),
  },

  {
    path: 'invoices',
    //component: Invoices,
    loadComponent: () => import('./pages/invoices/invoices').then((module) => module.Invoices),
  },
  // users/1234
  {
    path: 'users/:userId',
    //component: UserDetail,
    loadComponent: () =>
      import('./pages/user-detail/user-detail').then((module) => module.UserDetail),
  },
  {
    path: '**',
    //component: NotFound,
    loadComponent: () => import('./pages/not-found/not-found').then((module) => module.NotFound),
  },
];
