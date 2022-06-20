import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee/employee.service';
import { AuthService } from '../users/auth.service';
import { User } from '../users/user.model';

@Component({
  selector: 'employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.css']
})
export class EmployeehomeComponent implements OnInit {

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

  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService, private router: Router, private authService: AuthService ) { }

  ngOnInit(): void {
    this.newEmployee = this.authService.retreiveUserInfo();
  }

  hasLoggedIn(){
    return this.authService.isLoggedIn;
  }

  getManagerType(){
    return this.authService.managerType;
  }

  hasLoggedOut(): void{
    this.authService.removeUserInfo();
  }

}
