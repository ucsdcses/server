import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
