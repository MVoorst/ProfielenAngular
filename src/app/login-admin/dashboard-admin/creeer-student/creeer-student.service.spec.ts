import { TestBed, inject } from '@angular/core/testing';

import { CreeerStudentService } from './creeer-student.service';

describe('CreeerStudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreeerStudentService]
    });
  });

  it('should be created', inject([CreeerStudentService], (service: CreeerStudentService) => {
    expect(service).toBeTruthy();
  }));
});
