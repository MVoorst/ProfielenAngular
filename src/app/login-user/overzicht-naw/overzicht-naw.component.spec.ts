import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverzichtNAWComponent } from './overzicht-naw.component';

describe('OverzichtNAWComponent', () => {
  let component: OverzichtNAWComponent;
  let fixture: ComponentFixture<OverzichtNAWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverzichtNAWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverzichtNAWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
