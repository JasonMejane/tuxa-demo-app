import { TestBed } from '@angular/core/testing';

import { TuxaService } from './tuxa.service';

describe('TuxaService', () => {
  let service: TuxaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuxaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
