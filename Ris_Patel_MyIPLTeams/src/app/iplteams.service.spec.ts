import { TestBed } from '@angular/core/testing';

import { IPLTeamsService } from './iplteams.service';

describe('IplteamsService', () => {
  let service: IPLTeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IPLTeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
