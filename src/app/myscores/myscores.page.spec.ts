import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyscoresPage } from './myscores.page';

describe('MyscoresPage', () => {
  let component: MyscoresPage;
  let fixture: ComponentFixture<MyscoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyscoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyscoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
