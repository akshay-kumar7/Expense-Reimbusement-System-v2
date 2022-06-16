import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Reimbursement } from '../pending-reimbursements/reimbursement.model';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  baseUrl : string = "http://localhost:5555/api/employee"
  constructor(private http: HttpClient) { }

  getAllEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  viewEmployeeRequests(employeeId : any) : Observable<Reimbursement[]> {
    return this.http.get<Reimbursement[]>(this.baseUrl + '/' + employeeId);
  }


}
