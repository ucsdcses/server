import { Component, OnInit, Input } from '@angular/core';
import {TeamItem} from '../teams-card/team-item';


@Component({
  selector: 'app-teams-jumbotron',
  templateUrl: './teams-jumbotron.component.html',
  styleUrls: ['../staff.component.css']
})
export class TeamsJumbotronComponent implements OnInit {

	@Input() item:TeamItem; 
	@Input() teamList:Array<TeamItem>;

  constructor() { }

  ngOnInit() {
  	console.log(this.item);
  	console.log(this.teamList);
  }

}
