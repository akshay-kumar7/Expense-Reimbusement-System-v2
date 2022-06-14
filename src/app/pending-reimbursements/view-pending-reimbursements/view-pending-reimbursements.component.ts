import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PendingReimbursementsService } from '../pending-reimbursements.service';
import { Reimbursement } from '../reimbursement.model';

@Component({
  selector: 'view-pending-reimbursements',
  templateUrl: './view-pending-reimbursements.component.html',
  styleUrls: ['./view-pending-reimbursements.component.css']
})
export class ViewPendingReimbursementsComponent implements OnInit {

  currentAllPendingReimbursements: Reimbursement[]

  currentReimbursement: Reimbursement = {
    reimbursementId: 0,
    employeeId: 0,
    managerId: 0,
    status: '',
    amount: 0,
    reason: ''
  }

  constructor(private pendingReimbursementsService: PendingReimbursementsService,
              private router: Router) {
  this.currentAllPendingReimbursements = [];
}

  ngOnInit(): void {

    this.loadData();
  }

  loadData(){
    this.pendingReimbursementsService.getAllPendingReimbursements().subscribe(response => {
      console.log(response);
      this.currentAllPendingReimbursements = response;
    })
  }

  approveRequestStatus(reimbursementId: number, employeeId: number, managerId: number, amount: number, reason: string){
      this.currentReimbursement = {
        reimbursementId,
        employeeId,
        managerId,
        status: 'Approve',
        amount,
        reason
      }
      this.pendingReimbursementsService.approveReimbursement(this.currentReimbursement).subscribe((response)=>{
        console.log(response);

        this.loadData();
      })


  }

  denyRequestStatus(reimbursementId: number, employeeId: number, managerId: number, amount: number, reason: string){

  }

}
