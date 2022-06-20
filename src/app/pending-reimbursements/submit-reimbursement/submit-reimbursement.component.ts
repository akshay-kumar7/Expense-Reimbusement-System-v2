import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReimbursementsService } from '../reimbursements.service';
import { Reimbursement } from '../reimbursement.model';
import { AuthService } from 'src/app/users/auth.service';
import { User } from 'src/app/users/user.model';

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
    status:'Pending',
    amount:0,
    reason:''
    
  }

  newEmployee: User = {

    employeeId: 0,
    managerId: 0,
    firstName: '',
    lastName: '',
    email:'',
    userName: '',
    password: '',
    managerType: false
  }
  

  constructor(private activatedRoute: ActivatedRoute, private reimbursementsService: ReimbursementsService, private router: Router, private authService: AuthService, private reimbursementService: ReimbursementsService,) {

    this.currentAllReimbursements =[];
   }

  ngOnInit(): void {
    this.newEmployee = this.authService.retreiveUserInfo();

    let eIdParam = this.newEmployee.employeeId;
    };
  
      submitInfo() {
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