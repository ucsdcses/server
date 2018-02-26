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

  teamList: Array<TeamItem>;
  teamItem: TeamItem;
  staffService: StaffDataService;

  constructor(staffService: StaffDataService) {
    this.staffService = staffService;
  }

  ngOnInit() {
    this.teamList = this.staffService.fetchTeamsFromJSON();
  }

  getTeams() {
  	return this.teamList;
  }

  onBtnClick(item: TeamItem) {
    this.teamItem = item;
    this.tabModeChanger.emit([item, this.teamList, false]);
  	item.buttonClicked();
  }
}
