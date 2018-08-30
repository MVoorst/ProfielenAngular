import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VragenlijstComponent } from './vragenlijst.component';

describe('VragenlijstComponent', () => {
  let component: VragenlijstComponent;
  let fixture: ComponentFixture<VragenlijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VragenlijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VragenlijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
