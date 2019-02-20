import { TestBed } from '@angular/core/testing';

import { SeguidoresService } from './seguidores.service';

describe('SeguidoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeguidoresService = TestBed.get(SeguidoresService);
    expect(service).toBeTruthy();
  });
});
