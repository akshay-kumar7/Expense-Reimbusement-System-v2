import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovePendingReimbursementsComponent } from './approve-pending-reimbursements.component';

describe('ApprovePendingReimbursementsComponent', () => {
  let component: ApprovePendingReimbursementsComponent;
  let fixture: ComponentFixture<ApprovePendingReimbursementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovePendingReimbursementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovePendingReimbursementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
