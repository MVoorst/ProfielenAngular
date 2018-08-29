import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverzichtVragenComponent } from './overzicht-vragen.component';

describe('OverzichtVragenComponent', () => {
  let component: OverzichtVragenComponent;
  let fixture: ComponentFixture<OverzichtVragenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverzichtVragenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverzichtVragenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
