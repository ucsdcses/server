import { Component, OnInit } from '@angular/core';
import { TeamItem } from './teams-card/team-item';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

	public tabMode:boolean = false;
	public teamItem:TeamItem;
	public teamList: Array<TeamItem>;

  constructor() {
  }

  ngOnInit() {
  }

  tabModeChanger(tabDetails: [TeamItem, Array<TeamItem>, boolean]) {
  	this.teamItem = tabDetails[0];
  	this.teamList = tabDetails[1];
  	this.tabMode = tabDetails[2];
  }

}
