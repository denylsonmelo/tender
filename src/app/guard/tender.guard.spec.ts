import { TestBed, async, inject } from '@angular/core/testing';

import { TenderGuard } from './tender.guard';

describe('TenderGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TenderGuard]
    });
  });

  it('should ...', inject([TenderGuard], (guard: TenderGuard) => {
    expect(guard).toBeTruthy();
  }));
});
