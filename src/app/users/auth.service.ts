import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  managerType: string = "";

  constructor() { }

  storeUserInfo(user: User): void{
    sessionStorage.setItem("userInformation", JSON.stringify(user));
  }

  retreiveUserInfo(): User{
    let returnUser:User = {
      employeeId: 0,
      managerId: 0,
      firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: '',
        managerType: false}

    let userData: any = sessionStorage.getItem("userInformation");
    if(userData!=null){
      returnUser = JSON.parse(userData);

    }
    return returnUser;
  }

   removeUserInfo(): void{
    sessionStorage.removeItem("userInformation");
  }

}


