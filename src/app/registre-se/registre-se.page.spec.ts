import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreSePage } from './registre-se.page';

describe('RegistreSePage', () => {
  let component: RegistreSePage;
  let fixture: ComponentFixture<RegistreSePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistreSePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreSePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
