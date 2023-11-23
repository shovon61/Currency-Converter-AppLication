import { TestBed } from '@angular/core/testing';

import { ScalculateService } from './scalculate.service';

describe('ScalculateService', () => {
  let service: ScalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
