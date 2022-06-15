import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reimbursement } from './reimbursement.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementsService {

  baseUrl: string = "http://localhost:5555/reimbursement";

  constructor(private http: HttpClient) { }

  getAllPendingReimbursements(): Observable<Reimbursement[]>{

    return this.http.get<Reimbursement[]>(this.baseUrl + "/status" + "/Pending");

  }

  changeReimbursement(currentReimbursement: Reimbursement): Observable<Reimbursement>{
    return this.http.put<Reimbursement>(this.baseUrl+'/changestatus', currentReimbursement);
  }

  getAllApprovedReimbursements(): Observable<Reimbursement[]>{

    return this.http.get<Reimbursement[]>(this.baseUrl + "/status" + "/Approve");
  }

  getAllDeniedReimbursements(): Observable<Reimbursement[]>{

    return this.http.get<Reimbursement[]>(this.baseUrl + "/status" + "/Deny");
  }

  getEmployeeReimbursement(employeeId : number) : Observable<Reimbursement[]> {
    return this.http.get<Reimbursement[]>(this.baseUrl + '/' + employeeId);
  }
}

