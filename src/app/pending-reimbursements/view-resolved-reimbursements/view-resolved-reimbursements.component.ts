import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbursementsService } from '../reimbursements.service';
import { Reimbursement } from '../reimbursement.model';

@Component({
  selector: 'view-resolved-reimbursements',
  templateUrl: './view-resolved-reimbursements.component.html',
  styleUrls: ['./view-resolved-reimbursements.component.css']
})
export class ViewResolvedReimbursementsComponent implements OnInit {

  currentAllApprovedReimbursements: Reimbursement[]

  currentAllDeniedReimbursements: Reimbursement[]

  constructor(private ReimbursementsService: ReimbursementsService,
    private router: Router) { 
      this.currentAllApprovedReimbursements = [];
      this.currentAllDeniedReimbursements = [];
    }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.ReimbursementsService.getAllApprovedReimbursements().subscribe(response => {
      console.log(response);
      this.currentAllApprovedReimbursements = response;
    })
    this.ReimbursementsService.getAllDeniedReimbursements().subscribe(response => {
      console.log(response);
      this.currentAllDeniedReimbursements = response;
    })
  }

}
