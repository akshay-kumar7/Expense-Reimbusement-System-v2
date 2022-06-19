import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidMessage: string = "";
  storeMessage: string = "";

  user: User ={
    employeeId: 0,
	  managerId: 0,
	  firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    managerType: false
  }

  constructor(private userService: UsersService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  loginValidation(){
    this.userService.validateUser(this.user).subscribe(
      {
        next : (response)=>{
          console.log(response);
          if(response.employeeId != 0 ){
            //login success
            // send the respone to auth service and store the info in the session storage
            this.authService.storeUserInfo(response);
            // also set the isLoggedIn varibale of auth service to true
            this.authService.isLoggedIn = true;
            if(response.managerType == true){
                //set the role to admin in auth service
                this.authService.managerType="true";
                // route to view-http-book
                this.router.navigate(['view-all-employees']);
            }else if(response.managerType == false){
                //set the role to employee in auth service
                this.authService.managerType="false";
                // route to display component
                this.router.navigate(['view-update-information']);
            }
          }else{
            //login failed
            // stay back in this component and display
                // an error message on the the template
            this.invalidMessage = "Invalid Username/Password";
          }
      },
      error : (error) => {
        this.storeMessage = error.error.errorMessage;
      }
    });
  }

}
