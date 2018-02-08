import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.router';

import { HomeModule } from './home/home.module';
import { StaffModule } from './staff/staff.module';

import { StaffDataService } from './staffdata.service';

@NgModule({
  declarations: [
  AppComponent
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
