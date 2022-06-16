import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUpdateInformationComponent } from './employee/view-update-information/view-update-information.component';
import { ViewPendingReimbursementsComponent } from './pending-reimbursements/view-pending-reimbursements/view-pending-reimbursements.component';
import { ViewAllEmployeesComponent } from './employee/view-all-employees/view-all-employees.component';
import { ViewResolvedReimbursementsComponent } from './pending-reimbursements/view-resolved-reimbursements/view-resolved-reimbursements.component';
import { LoginComponent } from './users/login/login.component';
import { ViewEmployeeReimbursementComponent } from './pending-reimbursements/view-employee-reimbursement/view-employee-reimbursement.component';
<<<<<<< HEAD
import { LogoutComponent } from './users/logout/logout.component';
import { AuthenticationGuard } from './users/authentication.guard';
=======
import { SubmitReimbursementComponent } from './pending-reimbursements/submit-reimbursement/submit-reimbursement.component';

>>>>>>> bff5c6dc2795b933655321cbfab2625ee3d00015


const routes: Routes = [
  { path: "view-pending-reimbursements", component: ViewPendingReimbursementsComponent, canActivate:[AuthenticationGuard]},
  { path: "view-update-information", component: ViewUpdateInformationComponent, canActivate:[AuthenticationGuard]},
  { path: "view-all-employees", component: ViewAllEmployeesComponent, canActivate:[AuthenticationGuard]},
  { path: "view-employee-reimbursement", component: ViewEmployeeReimbursementComponent, canActivate:[AuthenticationGuard]},
  { path: "login", component: LoginComponent},
<<<<<<< HEAD
  { path: "view-resolved-reimbursements", component: ViewResolvedReimbursementsComponent, canActivate:[AuthenticationGuard]}
  { path: "logout", component: LogoutComponent}
=======
  { path: "view-resolved-reimbursements", component: ViewResolvedReimbursementsComponent}
  { path: "submit-reimbursement", component: SubmitReimbursementComponent}

>>>>>>> bff5c6dc2795b933655321cbfab2625ee3d00015
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }