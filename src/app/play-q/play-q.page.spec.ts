import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayQPage } from './play-q.page';

describe('PlayQPage', () => {
  let component: PlayQPage;
  let fixture: ComponentFixture<PlayQPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayQPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayQPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
