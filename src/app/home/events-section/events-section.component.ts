import { Component, OnInit } from '@angular/core';
import { EventsSectionService } from './events-section.service';

import * as moment from 'moment';

@Component({
  selector: 'events-section',
  templateUrl: './events-section.component.html',
  styleUrls: ['./events-section.component.css']
})
export class EventsSectionComponent implements OnInit {
  private upcomingFacebookEvents: Array<Event> = [];
  private pastFacebookEvents: Array<Event> = [];
  private viewingUpcoming: boolean = true;

  constructor(private service: EventsSectionService) { }

  ngOnInit() {
    this.populateEvents();
  }

  populateEvents() {
    this.service.getFacebookEvents().subscribe((events) => {
      console.log(events);
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
