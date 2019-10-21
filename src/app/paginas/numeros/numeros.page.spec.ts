import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosPage } from './numeros.page';

describe('NumerosPage', () => {
  let component: NumerosPage;
  let fixture: ComponentFixture<NumerosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumerosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
