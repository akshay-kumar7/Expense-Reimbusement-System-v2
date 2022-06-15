import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router,
    private employeeService : EmployeeService) {
      this.viewAllEmployees = [];
  }

  ngOnInit(): void {
  }

  goToReimbursement(employeeId : number) {
    this.router.navigate(['view-employee-reimbursement', employeeId])
  }
}
