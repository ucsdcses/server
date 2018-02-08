import { TestBed, inject } from '@angular/core/testing';

import { StaffDataService } from './staffdata.service';

describe('StaffdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaffDataService]
    });
  });

  it('should be created', inject([StaffDataService], (service: StaffDataService) => {
    expect(service).toBeTruthy();
  }));
});
