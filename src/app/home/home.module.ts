import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';
import { SubscribeModalComponent } 
  from './subscribe-modal/subscribe-modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutSectionComponent } 
  from './about-section/about-section.component';
import { EventsSectionComponent } 
  from './events-section/events-section.component';
import { TeamSectionComponent } 
  from './team-section/team-section.component';
import { ContactSectionComponent } 
  from './contact-section/contact-section.component';
import { FooterComponent } 
  from './footer/footer.component';
import { routing } from './home.router';

import { EventsSectionService } from 
'./events-section/events-section.service';

@NgModule({
  declarations: [
  HomeComponent,
  SubscribeModalComponent,
  NavbarComponent,
  HeaderComponent,
  AboutSectionComponent,
  EventsSectionComponent,
  TeamSectionComponent,
  ContactSectionComponent,
  FooterComponent,
  ],
  imports: [
  CommonModule,
  HttpModule,
  routing
  ],
  exports: [
  HomeComponent
  ],
  providers: [
    EventsSectionService
  ]
})
export class HomeModule {}
