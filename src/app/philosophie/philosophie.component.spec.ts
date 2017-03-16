/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PhilosophieComponent } from './philosophie.component';

describe('PhilosophieComponent', () => {
  let component: PhilosophieComponent;
  let fixture: ComponentFixture<PhilosophieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhilosophieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilosophieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
