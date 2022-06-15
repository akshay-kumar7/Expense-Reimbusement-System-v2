import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { reimbursement } from '../pending-reimbursements/reimbursement.model';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  // fakeServer : string = "http://localhost:3004"
  baseUrl : string = "http://localhost:7474/employees"
  constructor(private http: HttpClient) { }

  getAllEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  viewEmployeeRequests(employeeId : any) : Observable<reimbursement[]> {
    return this.http.get<reimbursement[]>(this.baseUrl + '/' + employeeId);
  }


}
