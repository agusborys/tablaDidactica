import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalesPage } from './animales.page';

describe('AnimalesPage', () => {
  let component: AnimalesPage;
  let fixture: ComponentFixture<AnimalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
