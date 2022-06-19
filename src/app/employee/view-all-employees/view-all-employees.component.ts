import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'view-all-employees',
  templateUrl: './view-all-employees.component.html',
  styleUrls: ['./view-all-employees.component.css']
})
export class ViewAllEmployeesComponent implements OnInit {

  viewAllEmployees: Employee[];
  storeMessage: string = "";

  constructor(private router: Router,
    private employeeService : EmployeeService) {
      this.viewAllEmployees = [];
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.employeeService.getAllEmployees().subscribe( {
      next :  (response) => {
        console.log(response);
        this.viewAllEmployees = response;
    },
      error : (error) => {
        console.log(error.error.errorMessage);
        this.storeMessage = error.error.errorMessage;
      }
    });
  }

  goToReimbursement(employeeId : number) {
    this.router.navigate(['view-employee-reimbursement', employeeId]);
  }
}
