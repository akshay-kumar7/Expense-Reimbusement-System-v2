import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  allUser: User[];

  newUser: User ={
    employeeId: 0,
	  managerId: 0,
	  firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    managerType: false
  }

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService, private router: Router) {

    this.allUser=[];
   }

  ngOnInit(): void {

    // this.router.navigate(['register']);
  }

  register(managerId: number, firstName: string, lastName: string, email: string, userName: string, password: string, managerType: boolean){

    this.newUser={
      employeeId:0,
      managerId,
      firstName,
      lastName,
      email,
      userName,
      password,
      managerType
      };

      this.usersService.registerUser(this.newUser).subscribe((reponse)=>{
        alert("New User Registered");
        this.newUser={
        employeeId: 0,
        managerId: 0,
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: '',
        managerType: false
      };

    })
    
  }

}
