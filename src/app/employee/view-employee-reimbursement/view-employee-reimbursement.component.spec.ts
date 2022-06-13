import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeReimbursementComponent } from './view-employee-reimbursement.component';

describe('ViewEmployeeReimbursementComponent', () => {
  let component: ViewEmployeeReimbursementComponent;
  let fixture: ComponentFixture<ViewEmployeeReimbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeReimbursementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeeReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
