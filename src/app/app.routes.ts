import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
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
