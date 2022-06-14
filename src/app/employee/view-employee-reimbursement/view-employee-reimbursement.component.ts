import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { reimbursement } from 'src/app/pending-reimbursements/reimbursement.model';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'view-employee-reimbursement',
  templateUrl: './view-employee-reimbursement.component.html',
  styleUrls: ['./view-employee-reimbursement.component.css']
})
export class ViewEmployeeReimbursementComponent implements OnInit {

  viewEmployeeReimbursement: reimbursement[];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private employeeService : EmployeeService) {
    this.viewEmployeeReimbursement = [];
  }

  ngOnInit(): void {
    let eIdParam = this.activatedRoute.snapshot.paramMap.get('eID');
    this.employeeService.viewEmployeeRequests(eIdParam).subscribe((response)=> {
      // this.displayReimbursement = response;
    });
  }



}
