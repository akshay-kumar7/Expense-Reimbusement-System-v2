import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string = "http://localhost:5555/api/employee";

  constructor(private http: HttpClient) { }

  validateUser(user: User): Observable<User>{
   return this.http.post<User>(this.baseUrl +"/login", user);
  }


  registerUser(newUser : User): Observable<User>{
    return this.http.post<User>(this.baseUrl + "/register",newUser);

  }

}