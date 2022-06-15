import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHttpService {

  baseUrl: string = "http://localhost:5555/api/employee";

  constructor(private http: HttpClient) { }
  
  viewEmpInformation(employeeId: any): Observable<Employee>{
    return this.http.get<Employee>(this.baseUrl+'/'+employeeId);
  }

  updateEmpInformation(sentEmployee: Employee): Observable<Employee>{

    return this.http.put<Employee>(this.baseUrl, sentEmployee);
  }
}
