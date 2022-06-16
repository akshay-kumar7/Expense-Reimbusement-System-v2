import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbursementsService } from '../reimbursements.service';
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

  constructor(private reimbursementsService: ReimbursementsService, private router: Router) {

    this.currentAllReimbursements = [];
   }

  ngOnInit(): void {

    this.loadData();
  }

  loadData(){
    this.reimbursementsService.getAllPendingReimbursements().subscribe(response => {
      console.log(response);
      this.currentAllReimbursements = response;
    })
  }

  //     submitInfo() {

  //       this.reimbursementsService.submitNewReimbursement(this.newReimbursement).subscribe((response)=>{

  //         console.log(response);

  //         this.loadData();

  //       this.newReimbursement={
  //         reimbursementId: 0,
  //         employeeId: 0,
  //         managerId:0,
  //         status:'',
  //         amount:0,
  //         reason:''

  //       };
      
  //     })
  // }

}
