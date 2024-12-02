import { TestBed } from '@angular/core/testing';

import { SitterService } from './sitter.service';

describe('SitterService', () => {
  let service: SitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
