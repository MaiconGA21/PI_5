import { TestBed } from '@angular/core/testing';

import { ApiEleicaoService } from './api-eleicao.service';

describe('ApiEleicaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiEleicaoService = TestBed.get(ApiEleicaoService);
    expect(service).toBeTruthy();
  });
});
