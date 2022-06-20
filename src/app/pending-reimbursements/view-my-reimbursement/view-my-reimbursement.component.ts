import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee/employee.service';
import { AuthService } from 'src/app/users/auth.service';
import { User } from 'src/app/users/user.model';
import { Reimbursement } from '../reimbursement.model';
import { ReimbursementsService } from '../reimbursements.service';

@Component({
  selector: 'view-my-reimbursement',
  templateUrl: './view-my-reimbursement.component.html',
  styleUrls: ['./view-my-reimbursement.component.css']
})
export class ViewMyReimbursementComponent implements OnInit {


  viewMyReimbursement: Reimbursement[];
  constructor(private activatedRoute: ActivatedRoute, 
      private employeeService: EmployeeService, 
      private router: Router, 
      private reimbursementService: ReimbursementsService, 
      private authService: AuthService) { this.viewMyReimbursement = [];}

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

  ngOnInit(): void {

    this.newEmployee = this.authService.retreiveUserInfo();

    let eIdParam = this.newEmployee.employeeId;
    this.reimbursementService.getEmployeeReimbursement(eIdParam).subscribe((response) => {
      this.viewMyReimbursement = response;
    });
  }
  

}
