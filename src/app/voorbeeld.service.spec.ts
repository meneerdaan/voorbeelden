import { TestBed } from '@angular/core/testing';

import { VoorbeeldService } from './voorbeeld.service';

describe('VoorbeeldService', () => {
  let service: VoorbeeldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoorbeeldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
