import { TestBed } from '@angular/core/testing';

import { ArmazenamentoService } from './armazenamento.service';

describe('ArmazenamentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArmazenamentoService = TestBed.get(ArmazenamentoService);
    expect(service).toBeTruthy();
  });
});
