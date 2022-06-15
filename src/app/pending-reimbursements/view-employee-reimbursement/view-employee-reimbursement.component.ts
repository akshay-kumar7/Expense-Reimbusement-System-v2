import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../employee/employee.model';
import { EmployeeService } from '../../employee/employee.service';
import { Reimbursement } from '../reimbursement.model';
import { ReimbursementsService } from '../reimbursements.service';

@Component({
  selector: 'view-employee-reimbursement',
  templateUrl: './view-employee-reimbursement.component.html',
  styleUrls: ['./view-employee-reimbursement.component.css']
})
export class ViewEmployeeReimbursementComponent implements OnInit {

  viewEmployeeReimbursement: Reimbursement[];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private reimbursementService: ReimbursementsService) {
      this.viewEmployeeReimbursement = [];
  }

  ngOnInit(): void {
    // let eIdParam = this.activatedRoute.snapshot.paramMap.get('eID');
    // this.reimbursementService.viewEmployeeRequests(eIdParam).subscribe((response) => {
      // this.displayReimbursement = response;
    // });
  }






}
