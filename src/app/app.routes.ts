import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'notfound',
    loadChildren: () =>
      import('./not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: '**',
    loadChildren: () =>
      import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];
