import { TestBed } from '@angular/core/testing';

import { StarWarsService } from './sw.service';

describe('SWService', () => {
  let service: StarWarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
