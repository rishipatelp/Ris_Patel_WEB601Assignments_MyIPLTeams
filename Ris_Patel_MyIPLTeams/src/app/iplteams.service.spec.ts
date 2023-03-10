import { TestBed } from '@angular/core/testing';

import { IplteamsService } from './iplteams.service';

describe('IplteamsService', () => {
  let service: IplteamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IplteamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
