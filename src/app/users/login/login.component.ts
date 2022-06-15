import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidMessage: string = "";

  user: User ={
    employeeId: 0,
	  managerId: 0,
	  firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    managerType: 
  }

  constructor() { }

  ngOnInit(): void {
  }

  loginValidation(){
    this.userService.validateUser(this.user).subscribe((response)=>{
      console.log(response);
      if(response.role != "" ){
        //login success
        // send the respone to auth service and store the info in the session storage
        this.authService.storeUserInfo(response);
        // also set the isLoggedIn varibale of auth service to true
        this.authService.isLoggedIn = true;
        if(response.role == "admin"){
            //set the role to admin in auth service
            this.authService.role="admin";
            // route to view-http-book
            this.router.navigate(['view-http-books']);
        }else if(response.role == "employee"){
            //set the role to employee in auth service
            this.authService.role="employee";
            // route to display component
            this.router.navigate(['display']);
        }
      }else{
        //login failed
        // stay back in this component and display
            // an error message on the the template
        this.invalidMessage = "Invalid Username/Password";
      }
    
    });
  }

}
