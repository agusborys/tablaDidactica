import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoresPage } from './colores.page';

describe('ColoresPage', () => {
  let component: ColoresPage;
  let fixture: ComponentFixture<ColoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
