import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeerStudentComponent } from './creeer-student.component';

describe('CreeerStudentComponent', () => {
  let component: CreeerStudentComponent;
  let fixture: ComponentFixture<CreeerStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreeerStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreeerStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
