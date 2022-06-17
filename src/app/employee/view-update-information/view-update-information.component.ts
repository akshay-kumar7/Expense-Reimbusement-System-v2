import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'view-update-information',
  templateUrl: './view-update-information.component.html',
  styleUrls: ['./view-update-information.component.css']
})
export class ViewUpdateInformationComponent implements OnInit {

  newEmployee: Employee = {

    employeeId: 0,
    managerId: 0,
    firstName: '',
    lastName: '',
    email:'',
    userName: '',
    password: '',
    managerType: false
  }

  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {

    // let bidparam = this.activatedRoute.snapshot.paramMap.get('bid');
    // console.log(bidparam)

    // this.employeeService.viewEmpInformation(bidParam).subscribe((response)=>{

    //   this.newEmployee = response;
    // })
  
}

  updateEmpInfo(){
      this.employeeService.updateEmpInformation(this.newEmployee).subscribe((response)=>{

        
      })
}

}