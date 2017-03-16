/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BildergalerieComponent } from './bildergalerie.component';

describe('BildergalerieComponent', () => {
  let component: BildergalerieComponent;
  let fixture: ComponentFixture<BildergalerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BildergalerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BildergalerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
