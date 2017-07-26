import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeModule } from './home/home.module'

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'HomeModule'},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);
