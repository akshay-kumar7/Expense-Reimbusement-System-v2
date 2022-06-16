import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reimbursement } from '../reimbursement.model';
import { ReimbursementsService } from '../reimbursements.service';

@Component({
  selector: 'view-employee-reimbursement',
  templateUrl: './view-employee-reimbursement.component.html',
  styleUrls: ['./view-employee-reimbursement.component.css']
})
export class ViewEmployeeReimbursementComponent implements OnInit {

  viewEmployeeReimbursement: Reimbursement[];
  // = {
  //   reimbursementId: 0,
  //   employeeId: 0,
  //   managerId: 0,
  //   status: '',
  //   amount: 0,
  //   reason: ''
  // };

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private reimbursementService: ReimbursementsService) { 
      this.viewEmployeeReimbursement = [];
    }

  ngOnInit(): void {
    let eIdParam = this.activatedRoute.snapshot.paramMap.get('eID');
    this.reimbursementService.getEmployeeReimbursement(eIdParam).subscribe((response) => {
      this.viewEmployeeReimbursement = response;
    });
  }





}