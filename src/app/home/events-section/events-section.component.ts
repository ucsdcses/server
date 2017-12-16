import { Component, OnInit } from '@angular/core';
import { EventsSectionService } from './events-section.service';

import * as moment from 'moment';

@Component({
  selector: 'events-section',
  templateUrl: './events-section.component.html',
  styleUrls: ['./events-section.component.css']
})
export class EventsSectionComponent implements OnInit {
  public upcomingFacebookEvents: Array<Event> = [];
  public pastFacebookEvents: Array<Event> = [];
  public viewingUpcoming: boolean = true;

  constructor(private service: EventsSectionService) { }

  ngOnInit() {
    this.populateEvents();
    if (upcomingFacebookEvents.length == 0){
      viewingUpcoming = false;
    }
  }

  populateEvents() {
    this.service.getFacebookEvents().subscribe((events) => {
      this.upcomingFacebookEvents =
      events.filter((event) => moment(event.end_time).isAfter(moment()));
      this.pastFacebookEvents =
      events.filter((event) => moment(event.end_time).isBefore(moment()));
    });
  }

  getUpcomingFacebookEvents() {
    return this.upcomingFacebookEvents;
  }

  getPastFacebookEvents() {
    return this.pastFacebookEvents;
  }
}

interface Event {
  name: string;
  cover: string;
  start_time: string;
  end_time: string;
  hour_time: string;
  description: string;
  id: string;
  place: { name: string; };
}
