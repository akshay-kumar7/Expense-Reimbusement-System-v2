import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PendingReimbursementsService } from 'src/app/pending-reimbursements/pending-reimbursements.service';
import { Employee } from '../../employee/employee.model';
import { EmployeeService } from '../../employee/employee.service';
import { Reimbursement } from '../reimbursement.model';

@Component({
  selector: 'view-employee-reimbursement',
  templateUrl: './view-employee-reimbursement.component.html',
  styleUrls: ['./view-employee-reimbursement.component.css']
})
export class ViewEmployeeReimbursementComponent implements OnInit {

  viewEmployeeReimbursement: Reimbursement[];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private reimbursementService: PendingReimbursementsService) {
      this.viewEmployeeReimbursement = [];
  }

  ngOnInit(): void {
    // let eIdParam = this.activatedRoute.snapshot.paramMap.get('eID');
    // this.reimbursementService.viewEmployeeRequests(eIdParam).subscribe((response) => {
      // this.displayReimbursement = response;
    // });
  }






}
