import { Component, OnInit } from '@angular/core';
import { EventsSectionService } from './events-section.service';

@Component({
  selector: 'events-section',
  templateUrl: './events-section.component.html',
  styleUrls: ['./events-section.component.css']
})
export class EventsSectionComponent implements OnInit {
  private facebookEvents: Array<Event> = [];

  constructor(private service: EventsSectionService) { }

  ngOnInit() {
    this.populateEvents();
  }

  populateEvents() {
    this.service.getFacebookEvents().subscribe((events) => {
      this.facebookEvents = events;
    });
  }

  getFacebookEvents() {
    return this.facebookEvents;
  }
}

class Event {
}
