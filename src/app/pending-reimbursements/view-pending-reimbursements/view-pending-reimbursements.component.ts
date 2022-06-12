import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PendingReimbursementsService } from '../pending-reimbursements.service';
import { reimbursement } from '../reimbursement.model';

@Component({
  selector: 'view-pending-reimbursements',
  templateUrl: './view-pending-reimbursements.component.html',
  styleUrls: ['./view-pending-reimbursements.component.css']
})
export class ViewPendingReimbursementsComponent implements OnInit {

  currentAllPendingReimbursements: reimbursement[]

  constructor(private pendingReimbursementsService: PendingReimbursementsService,
              private router: Router) {
  this.currentAllPendingReimbursements = [];
}

  ngOnInit(): void {
  }

}
