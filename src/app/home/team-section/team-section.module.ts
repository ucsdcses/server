import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdDialogModule } from '@angular/material';
import { AngularFontAwesomeModule } from
'angular-font-awesome/angular-font-awesome';

import { TeamSectionComponent } from './team-section.component';
import { BioModalComponent } from './bio-modal/bio-modal.component';

@NgModule({
  declarations: [
    TeamSectionComponent,
    BioModalComponent
  ],
  exports: [
    TeamSectionComponent,
  ],
  entryComponents: [
    BioModalComponent
  ],
  imports: [
    CommonModule,
    MdDialogModule,
    AngularFontAwesomeModule
  ],
})
export class TeamSectionModule { }
