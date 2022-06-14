import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reimbursement } from './reimbursement.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PendingReimbursementsService {

  baseUrl: string = "http://localhost:7474/reimbursement";

  constructor(private http: HttpClient) { }

  getAllPendingReimbursements(): Observable<Reimbursement[]>{

    return this.http.get<Reimbursement[]>(this.baseUrl);

  }

  approveReimbursement(currentReimbursement: Reimbursement): Observable<Reimbursement>{
    return this.http.post<Reimbursement>(this.baseUrl+'/changestatus', currentReimbursement);
  }
}
