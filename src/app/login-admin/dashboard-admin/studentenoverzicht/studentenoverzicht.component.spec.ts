import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentenoverzichtComponent } from './studentenoverzicht.component';

describe('StudentenoverzichtComponent', () => {
  let component: StudentenoverzichtComponent;
  let fixture: ComponentFixture<StudentenoverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentenoverzichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentenoverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
