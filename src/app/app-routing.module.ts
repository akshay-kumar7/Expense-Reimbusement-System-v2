import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUpdateInformationComponent } from './employee/view-update-information/view-update-information.component';
import { ApprovePendingReimbursementsComponent } from './pending-reimbursements/approve-pending-reimbursements/approve-pending-reimbursements.component';
import { DenyPendingReimbursementsComponent } from './pending-reimbursements/deny-pending-reimbursements/deny-pending-reimbursements.component';
import { ViewPendingReimbursementsComponent } from './pending-reimbursements/view-pending-reimbursements/view-pending-reimbursements.component';
import { ViewAllEmployeesComponent } from './employee/view-all-employees/view-all-employees.component';
import { ViewEmployeeReimbursementComponent } from './employee/view-employee-reimbursement/view-employee-reimbursement.component';
import { LoginComponent} from './users/login/login.component';


const routes: Routes = [
  { path: "view-pending-reimbursements", component: ViewPendingReimbursementsComponent},
  { path: "approve-pending-reimbursements", component: ApprovePendingReimbursementsComponent},
  { path: "display", component: DenyPendingReimbursementsComponent},
  { path: "view-update-information", component: ViewUpdateInformationComponent},
  { path: "view-all-employees", component: ViewAllEmployeesComponent},
  { path: "view-employee-reimbursement", component: ViewEmployeeReimbursementComponent},
  { path: "login", component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
