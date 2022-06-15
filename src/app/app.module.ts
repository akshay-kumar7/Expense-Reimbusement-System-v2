import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { HeaderComponent } from './header/header.component';
import { ViewPendingReimbursementsComponent } from './pending-reimbursements/view-pending-reimbursements/view-pending-reimbursements.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewUpdateInformationComponent } from './employee/view-update-information/view-update-information.component';
//import { ViewEmployeeReimbursementComponent } from './pending-reimbursements/view-employee-reimbursement.component';
import { ViewAllEmployeesComponent } from './employee/view-all-employees/view-all-employees.component';
import { ViewResolvedReimbursementsComponent } from './pending-reimbursements/view-resolved-reimbursements/view-resolved-reimbursements.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ViewPendingReimbursementsComponent,
    ViewUpdateInformationComponent,
    //ViewEmployeeReimbursementComponent,
    ViewAllEmployeesComponent,
    ViewResolvedReimbursementsComponent
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
