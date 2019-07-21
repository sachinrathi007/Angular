import { TestBed } from '@angular/core/testing';

import { S1Service } from './s1.service';

describe('S1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: S1Service = TestBed.get(S1Service);
    expect(service).toBeTruthy();
  });
});
