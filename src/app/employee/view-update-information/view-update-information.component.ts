import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/users/auth.service';
import { User } from 'src/app/users/user.model';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'view-update-information',
  templateUrl: './view-update-information.component.html',
  styleUrls: ['./view-update-information.component.css']
})
export class ViewUpdateInformationComponent implements OnInit {

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

  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService, private router: Router, private authService: AuthService ) {}

  ngOnInit(): void {

    this.newEmployee = this.authService.retreiveUserInfo();
    
  
}



  updateEmpInfo(){

      this.employeeService.updateEmpInformation(this.newEmployee).subscribe((response)=>{
        
        alert("Profile Updated!");
      })
}

}