import { TestBed } from '@angular/core/testing';

import { MetaCoinService } from './meta-coin.service';

describe('MetaCoinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetaCoinService = TestBed.get(MetaCoinService);
    expect(service).toBeTruthy();
  });
});
