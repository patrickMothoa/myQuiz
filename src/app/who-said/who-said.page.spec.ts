import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoSaidPage } from './who-said.page';

describe('WhoSaidPage', () => {
  let component: WhoSaidPage;
  let fixture: ComponentFixture<WhoSaidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoSaidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoSaidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
