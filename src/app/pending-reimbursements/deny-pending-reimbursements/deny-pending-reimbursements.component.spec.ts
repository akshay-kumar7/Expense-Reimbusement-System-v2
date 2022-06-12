import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenyPendingReimbursementsComponent } from './deny-pending-reimbursements.component';

describe('DenyPendingReimbursementsComponent', () => {
  let component: DenyPendingReimbursementsComponent;
  let fixture: ComponentFixture<DenyPendingReimbursementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenyPendingReimbursementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenyPendingReimbursementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
