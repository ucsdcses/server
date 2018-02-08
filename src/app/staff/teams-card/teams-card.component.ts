import { Component, OnInit } from '@angular/core';
import { TeamItem } from './team-item';

import { StaffDataService } from '../../staffdata.service';

@Component({
  selector: 'app-teams-card',
  templateUrl: './teams-card.component.html',
  styleUrls: ['../staff.component.css']
})
export class TeamsCardComponent implements OnInit {

	public teamList: Array<Array<TeamItem>>;
  staffService: StaffDataService;

  constructor(staffService: StaffDataService) {
    this.staffService = staffService;
  }

  ngOnInit() {
    console.log("hi");
    this.teamList = this.staffService.fetchTeamsFromJSON();
  }

  getTeams() {
  	return this.teamList;
  }

  onBtnClick(item: TeamItem) {
  	item.buttonClicked();
  }
}
