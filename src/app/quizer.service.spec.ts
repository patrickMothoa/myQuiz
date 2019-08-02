import { TestBed } from '@angular/core/testing';

import { QuizerService } from './quizer.service';

describe('QuizerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizerService = TestBed.get(QuizerService);
    expect(service).toBeTruthy();
  });
});
