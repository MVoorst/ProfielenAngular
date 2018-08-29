import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NAWGegevensComponent } from './nawgegevens.component';

describe('NAWGegevensComponent', () => {
  let component: NAWGegevensComponent;
  let fixture: ComponentFixture<NAWGegevensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NAWGegevensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NAWGegevensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
