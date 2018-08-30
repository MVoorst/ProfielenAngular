import { TestBed, inject } from '@angular/core/testing';

import { VragenlijstService } from './vragenlijst.service';

describe('VragenlijstService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VragenlijstService]
    });
  });

  it('should be created', inject([VragenlijstService], (service: VragenlijstService) => {
    expect(service).toBeTruthy();
  }));
});
