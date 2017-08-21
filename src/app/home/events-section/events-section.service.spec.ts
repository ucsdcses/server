import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { EventsSectionService } from './events-section.service';

describe('EventsSectionService', () => {
  let fakeResponse = {name: "Event1", description: "This is event one."};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: 
      [
        EventsSectionService, 
        {provide: XHRBackend, useClass: MockBackend}
      ]
    });
  });

  it('should be created', inject([EventsSectionService], (service: EventsSectionService) => {
    expect(service).toBeTruthy();
  }));

  it('should should provide a method for grabbing facebook events', 
    inject([EventsSectionService], (service: EventsSectionService) => {

    expect(service.getFacebookEvents).toBeDefined();

    expect(service.getFacebookEvents()).not.toBeUndefined();
  }));

  it('should grab facebook events from the backend', 
    inject([XHRBackend, EventsSectionService], 
      (mockBackend, service: EventsSectionService) => {

      mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        expect(connection.request.url).toEqual("/api/facebook-events")
        connection.mockRespond(
          new Response(
            new ResponseOptions(
              { body: fakeResponse }
            )
          )
        )
      });

      expect(service.getFacebookEvents()).not.toBeNull();
      service.getFacebookEvents().subscribe((response) => {
        expect(response).toEqual(fakeResponse);
      });
    }));

});
