import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/game-page/game-page').then((m) => m.GamePage),
    pathMatch: 'full',
  },
  {
    path: 'scores',
    loadComponent: () => import('./pages/scores-page/scores-page').then((m) => m.ScoresPage),
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings-page/settings-page').then((m) => m.SettingsPage),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found-page/not-found-page').then((m) => m.NotFoundPage),
  },
];
