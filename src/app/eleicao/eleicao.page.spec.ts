import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleicaoPage } from './eleicao.page';

describe('EleicaoPage', () => {
  let component: EleicaoPage;
  let fixture: ComponentFixture<EleicaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleicaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
