import { TestBed, inject } from '@angular/core/testing';

import { NawgegevensService } from './nawgegevens.service';

describe('NawgegevensService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NawgegevensService]
    });
  });

  it('should be created', inject([NawgegevensService], (service: NawgegevensService) => {
    expect(service).toBeTruthy();
  }));
});
