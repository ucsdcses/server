import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BioSet } from './bio-set';
import { Bio } from './bio';
import { BioModalComponent } from './bio-modal/bio-modal.component';

@Component({
  selector: 'team-section',
  templateUrl: './team-section.component.html',
  styleUrls: ['../home.component.css', './team-section.component.css']
})

/**
 * Component that holds the team section on the home page. By clicking on
 * a team member, a dialog with their bio info will pop up.
 */
export class TeamSectionComponent {
  constructor(public bioDialog: MatDialog) { }

  /**
   * Opens a bio modal. Called when one of the people in the team section
   * has their li clicked on.
   * @param  {Bio}    teamMember the team member to open the bio for.
   * @return {void}
   */
  openBioModal(teamMember: Bio) : void {
    this.bioDialog.open(BioModalComponent, { data: teamMember });
  }

  /**
   * Gets the static bioset class so that the html can get the resource
   * containing bio data for each of the team members
   * @return {typeof} The bioset class object
   */
  getBioSet() : typeof BioSet {
    return BioSet;
  }
}
