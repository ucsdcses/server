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
  public viewingUpcoming: boolean = false; // Temp while we work on upcoming events fix

  constructor(private service: EventsSectionService) { }

  ngOnInit() {
    this.populateEvents();
  }

  /**
   * Populates the facebook events on the page by making a callback to the
   * events service.
   * @return None, sets the state of the page.
   */
  populateEvents() {
    this.service.getEvents().subscribe((events) => {
      // Get upcoming events, if there are none, make previous events the
      // default view
      this.upcomingFacebookEvents =
        events.filter((event: Event) =>
          moment(event.end_time).isAfter(moment()));
      if (this.upcomingFacebookEvents.length == 0) {
        this.viewingUpcoming = false;
      }

      this.pastFacebookEvents =
        events.filter((event: Event) =>
          moment(event.end_time).isBefore(moment()));
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
