import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PendingReimbursementsService } from '../pending-reimbursements.service';
import { Reimbursement } from '../reimbursement.model';

@Component({
  selector: 'app-submit-reimbursement',
  templateUrl: './submit-reimbursement.component.html',
  styleUrls: ['./submit-reimbursement.component.css']
})
export class SubmitReimbursementComponent implements OnInit {

  currentAllReimbursements: Reimbursement[];
  newReimbursement: Reimbursement = {

    reimbursementId: 0,
    employeeId: 0,
    managerId:0,
    status:'',
    amount:0,
    reason:''
    
  }

  constructor(private pendingReimbursementsService: PendingReimbursementsService, private router: Router) {

    this.currentAllReimbursements = [];
   }

  ngOnInit(): void {

    this.loadData();
  }

  loadData(){
    this.pendingReimbursementsService.getAllPendingReimbursements().subscribe(response => {
      console.log(response);
      this.currentAllReimbursements = response;
    })
  }

  //     submitInfo() {
  //     this.pendingReimbursementsService.submitReimbursement(this.newReimbursement).subscribe((response)=>
      
  //     this.loadData();

  //     this.currentAllReimbursements
      
  //     )
  // }

}
