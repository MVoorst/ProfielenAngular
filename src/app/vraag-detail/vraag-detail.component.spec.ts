import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VraagDetailComponent } from './vraag-detail.component';

describe('VraagDetailComponent', () => {
  let component: VraagDetailComponent;
  let fixture: ComponentFixture<VraagDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VraagDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VraagDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
