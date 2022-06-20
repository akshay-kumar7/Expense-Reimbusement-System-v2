import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyReimbursementComponent } from './view-my-reimbursement.component';

describe('ViewMyReimbursementComponent', () => {
  let component: ViewMyReimbursementComponent;
  let fixture: ComponentFixture<ViewMyReimbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyReimbursementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
