import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ViewPendingReimbursementsComponent } from './pending-reimbursements/view-pending-reimbursements/view-pending-reimbursements.component';
import { ApprovePendingReimbursementsComponent } from './pending-reimbursements/approve-pending-reimbursements/approve-pending-reimbursements.component';
import { DenyPendingReimbursementsComponent } from './pending-reimbursements/deny-pending-reimbursements/deny-pending-reimbursements.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewUpdateInformationComponent } from './employee/view-update-information/view-update-information.component';
import { ViewEmployeeReimbursementComponent } from './view-employee/view-employee-reimbursement/view-employee-reimbursement.component';
import { ViewAllEmployeesComponent } from './view-employee/view-all-employees/view-all-employees.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ViewPendingReimbursementsComponent,
    ApprovePendingReimbursementsComponent,
    DenyPendingReimbursementsComponent,
    ViewUpdateInformationComponent,
    ViewEmployeeReimbursementComponent,
    ViewAllEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
