import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';

const checkToken = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): MaybeAsync<GuardResult> => {
  console.log('Check token');
  return true;
};

const checkTokenV2 = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): Promise<boolean> => {
  // pas de CDI
  // await possible
  console.log('Check token v2');
  return Promise.resolve(true);
};

@Injectable({
  providedIn: 'root',
})
class CheckTokenV3 implements CanActivate {
  // CDI inject
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    console.log(route, state);
    console.log('CheckToken v3');
    return true;
  }
}

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
    canActivate: [checkToken, checkTokenV2, CheckTokenV3],
    //component: Invoices,
    loadComponent: () => import('./pages/invoices/invoices').then((module) => module.Invoices),
  },
  {
    path: 'users/:userId', // users/1234
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
