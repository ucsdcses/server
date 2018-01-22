import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

import { Bio } from '../bio';

@Component({
  selector: 'app-bio-modal',
  templateUrl: './bio-modal.component.html',
  styleUrls: ['./bio-modal.component.css']
})
export class BioModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public bio: Bio) { }
}
