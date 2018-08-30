import { TestBed, inject } from '@angular/core/testing';

import { VraagService } from './vraag.service';

describe('VraagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VraagService]
    });
  });

  it('should be created', inject([VraagService], (service: VraagService) => {
    expect(service).toBeTruthy();
  }));
});
