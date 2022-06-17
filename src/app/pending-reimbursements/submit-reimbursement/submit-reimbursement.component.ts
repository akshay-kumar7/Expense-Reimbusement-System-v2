import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReimbursementsService } from '../reimbursements.service';
import { Reimbursement } from '../reimbursement.model';

@Component({
  selector: 'submit-reimbursement',
  templateUrl: './submit-reimbursement.component.html',
  styleUrls: ['./submit-reimbursement.component.css']
})
export class SubmitReimbursementComponent implements OnInit {

  currentAllReimbursements: Reimbursement[];

 newReimbursement: Reimbursement = {

    reimbursementId: 0,
    employeeId: 0,
    managerId:0,
    status:'pending',
    amount:0,
    reason:''
    
  }

  constructor(private activatedRoute: ActivatedRoute, private reimbursementsService: ReimbursementsService, private router: Router) {

    this.currentAllReimbursements =[];
   }

  ngOnInit(): void {}



      submitInfo() {

        // var eID = sessionStorage.getItem('userInformation')

        this.reimbursementsService.submitNewReimbursement(this.newReimbursement).subscribe((response)=>{

          console.log(response);

          alert("Request submitted!");

          this.newReimbursement = {
            reimbursementId: 0,
            employeeId: 0,
            managerId:0,
            status:'',
            amount:0,
            reason:''
          };
      
      })
  }

}
