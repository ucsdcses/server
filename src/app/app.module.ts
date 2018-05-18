import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.router';

import { HomeModule } from './home/home.module';
import { StaffModule } from './staff/staff.module';

import { StaffDataService } from './staffdata.service';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [
  AppComponent,
  ResourcesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    StaffModule,
    routing,
  ],
  providers: [
    StaffDataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
