import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';

import { HomeModule } from '../home/home.module';
import { TeamsCardComponent } from './teams-card/teams-card.component';
import { TeamsJumbotronComponent } from './teams-jumbotron/teams-jumbotron.component';

@NgModule({
  imports: [
    CommonModule,
    HomeModule
  ],
  declarations: [
  	StaffComponent,
  	TeamsCardComponent,
  	TeamsJumbotronComponent
  ],
  exports: [
    StaffComponent
  ],
})
export class StaffModule { }
