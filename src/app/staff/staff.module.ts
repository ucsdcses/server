import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';

import { HomeModule } from '../home/home.module';
import { TeamsCardComponent } from './teams-card/teams-card.component';

@NgModule({
  imports: [
    CommonModule,
    HomeModule
  ],
  declarations: [
  	StaffComponent,
  	TeamsCardComponent
  ],
  exports: [
    StaffComponent
  ],
})
export class StaffModule { }
