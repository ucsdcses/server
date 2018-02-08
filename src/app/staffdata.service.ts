import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TeamItem } from './staff/teams-card/team-item';

@Injectable()
export class StaffDataService {

  teamBlocks:Array<Array<TeamItem>> = [];
	teamList:Array<TeamItem> = [
		new TeamItem({
			title: "Web and Projects",
			desc: "Cool stuff",
			events: ["hello", "hi", "world"],
			members: ["max,yixin,david,alex,prg"],
			imgPath: "../../assets/images/staff-placeholder.jpg"	
		}),
		new TeamItem({
			title: "Web and Projects",
			desc: "Cool stuff",
			events: ["hello", "hi", "world"],
			members: ["max,yixin,david,alex,prg"],
			imgPath: "../../assets/images/staff-placeholder.jpg"	
		}),
		new TeamItem({
			title: "Web and Projects",
			desc: "Cool stuff",
			events: ["hello", "hi", "world"],
			members: ["max,yixin,david,alex,prg"],
			imgPath: "../../assets/images/staff-placeholder.jpg"	
		}),
		new TeamItem({
			title: "Web and Projects",
			desc: "Cool stuff",
			events: ["hello", "hi", "world"],
			members: ["max,yixin,david,alex,prg"],
			imgPath: "../../assets/images/staff-placeholder.jpg"	
		}),
		new TeamItem({
			title: "Web and Projects",
			desc: "Cool stuff",
			events: ["hello", "hi", "world"],
			members: ["max,yixin,david,alex,prg"],
			imgPath: "../../assets/images/staff-placeholder.jpg"	
		}),
		new TeamItem({
			title: "Web and Projects",
			desc: "Cool stuff",
			events: ["hello", "hi", "world"],
			members: ["max,yixin,david,alex,prg"],
			imgPath: "../../assets/images/staff-placeholder.jpg"	
		})
	];
  constructor(private http: Http) { }

  /*
   * Fetches team details from a Google spreadsheet. To be done. Currently, using
   * hardcoded data.
   */
  fetchTeamsFromJSON():Array<Array<TeamItem>> {
  	this.http.get('TODO - replace this with nodejs JSON API').subscribe(res => {
  	});

  	// Separates cards into div blocks for design effects.
  	var sum:number = 0;
  	var i:number = 1;
  	while(sum < this.teamList.length) {
  		sum += i;
  		i++;
  		this.teamBlocks.unshift(this.teamList.slice(sum, sum + i));
  	}

  	return this.teamBlocks;
  }
}
