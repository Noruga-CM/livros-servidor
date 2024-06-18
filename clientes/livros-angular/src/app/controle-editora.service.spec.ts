import { TestBed } from '@angular/core/testing';

import { ControleEditoraService } from './controle-editora.service';

describe('ControleEditoraService', () => {
  let service: ControleEditoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleEditoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
