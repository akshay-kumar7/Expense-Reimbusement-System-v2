import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeHttpService } from '../employee-http.service';
import { Employee } from '../employee.model';


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

  constructor(private employeeHttpService: EmployeeHttpService, private router: Router) {}

  ngOnInit(): void {

//     let bidparam = this.activatedRoute.snapshot.paramMap.get('bid');
//     console.log(bidparam)

//     this.employeeHttpService.viewEmpInformation(bidParam).subscribe((response)=>{

//       this.newEmployee = response;
//     })
  
// }

//   updateEmpInfo(){
//       this.employeeHttpService.updateEmpInformation(this.newEmployee).subscribe((response)=>{

//         this.router.navigate(['']);
//       })
}

}