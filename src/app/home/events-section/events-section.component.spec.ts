import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Observable} from 'rxjs/Observable';
import { EventsSectionComponent } from './events-section.component';
import { EventsSectionService } from './events-section.service';

describe('EventsSectionComponent', () => {
  let component: EventsSectionComponent;
  let serviceComponent: EventsSectionService;
  let fixture: ComponentFixture<EventsSectionComponent>;
  let fakeEventsArray = 
    [
      {name: 'Event1', description: 'This is event one.'}, 
      {name: 'Event2', description: 'This is event two.'}, 
      {name: 'Event3', description: 'This is event three.'}, 
    ]
  let mockEventsService = {
    getFacebookEvents: function() {
      return new Observable(observer => observer.next(fakeEventsArray));
    }
  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsSectionComponent ],
      providers: [{provide: EventsSectionService, useValue: mockEventsService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsSectionComponent);
    component = fixture.componentInstance;

    spyOn(component, 'ngOnInit').and.callThrough();
    spyOn(component, 'populateEvents').and.callThrough();

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize', () => {
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should have a method to get the events it contains', () => {
    expect(component.getFacebookEvents).toBeDefined();

    expect(component.getFacebookEvents()).not.toBeUndefined();
  });

  it('should populate Facebook events during initialization', () => {
    expect(component.ngOnInit).toHaveBeenCalled();
    expect(component.populateEvents).toHaveBeenCalled();
    expect(component.getFacebookEvents()).toEqual(fakeEventsArray);
  });
});
