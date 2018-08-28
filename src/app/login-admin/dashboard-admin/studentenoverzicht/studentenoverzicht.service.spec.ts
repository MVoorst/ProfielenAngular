import { TestBed, inject } from '@angular/core/testing';

import { StudentenoverzichtService } from './studentenoverzicht.service';

describe('StudentenoverzichtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentenoverzichtService]
    });
  });

  it('should be created', inject([StudentenoverzichtService], (service: StudentenoverzichtService) => {
    expect(service).toBeTruthy();
  }));
});
