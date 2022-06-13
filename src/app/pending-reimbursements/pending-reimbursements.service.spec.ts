import { TestBed } from '@angular/core/testing';

import { PendingReimbursementsService } from './pending-reimbursements.service';

describe('PendingReimbursementsService', () => {
  let service: PendingReimbursementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingReimbursementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
