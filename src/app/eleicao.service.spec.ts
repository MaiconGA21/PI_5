import { TestBed } from '@angular/core/testing';

import { EleicaoService } from './eleicao.service';

describe('EleicaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EleicaoService = TestBed.get(EleicaoService);
    expect(service).toBeTruthy();
  });
});
