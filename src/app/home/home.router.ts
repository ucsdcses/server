import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home.component';
import { StaffComponent } from '../staff/staff.component';

const routes: Route[] = [
	{
    path: 'staff',
    pathMatch: 'full',
    component: StaffComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
