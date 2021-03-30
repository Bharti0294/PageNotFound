import { TestBed } from '@angular/core/testing';

import { PagenotfoundGuard } from './pagenotfound.guard';

describe('PagenotfoundGuard', () => {
  let guard: PagenotfoundGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PagenotfoundGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
