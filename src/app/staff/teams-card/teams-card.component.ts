import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TeamItem } from './team-item';

import { StaffDataService } from '../../staffdata.service';

@Component({
  selector: 'app-teams-card',
  templateUrl: './teams-card.component.html',
  styleUrls: ['../staff.component.css']
})
export class TeamsCardComponent implements OnInit {

  @Output() tabModeChanger:EventEmitter<[TeamItem, Array<TeamItem>, boolean]> = 
                            new EventEmitter<[TeamItem, Array<TeamItem>, boolean]>();

	public teamList: Array<Array<TeamItem>>;
  simpilfiedList: Array<TeamItem>;
  teamItem: TeamItem;
  staffService: StaffDataService;

  constructor(staffService: StaffDataService) {
    this.staffService = staffService;
  }

  ngOnInit() {
    let result = this.staffService.fetchTeamsFromJSON();
    this.teamList = result[0];
    this.simpilfiedList = result[1];
  }

  getTeams() {
  	return this.teamList;
  }

  onBtnClick(item: TeamItem) {
    this.teamItem = item;
    this.tabModeChanger.emit([item, this.simpilfiedList, false]);
  	item.buttonClicked();
  }
}
