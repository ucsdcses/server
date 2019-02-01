import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule, MatToolbarModule } from '@angular/material';

import { TeamSectionModule }
  from './team-section/team-section.module';

import { HomeComponent } from './home.component';
import { SubscribeModalComponent }
  from './subscribe-modal/subscribe-modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutSectionComponent }
  from './about-section/about-section.component';
import { EventsSectionComponent }
  from './events-section/events-section.component';
import { ContactSectionComponent }
  from './contact-section/contact-section.component';
import { FooterComponent }
  from './footer/footer.component';
import { routing } from './home.router';

import { EventsSectionService } from
  './events-section/events-section.service';

import { StaffComponent } from '../staff/staff.component';
import {SponsorSectionComponent} from "./sponsor-section/sponsor-section.component";

@NgModule({
  declarations: [
    HomeComponent,
    SubscribeModalComponent,
    NavbarComponent,
    HeaderComponent,
    AboutSectionComponent,
    EventsSectionComponent,
    ContactSectionComponent,
    SponsorSectionComponent,
    FooterComponent,
    StaffComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    routing,
    Angular2FontawesomeModule,
    BrowserAnimationsModule,
    TeamSectionModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    EventsSectionService
  ]
})
export class HomeModule { }
