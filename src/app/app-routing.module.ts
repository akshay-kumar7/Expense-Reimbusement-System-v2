import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUpdateInformationComponent } from './employee/view-update-information/view-update-information.component';
import { ViewPendingReimbursementsComponent } from './pending-reimbursements/view-pending-reimbursements/view-pending-reimbursements.component';
import { ViewAllEmployeesComponent } from './employee/view-all-employees/view-all-employees.component';
import { LoginComponent} from './login/login.component';
import { ViewResolvedReimbursementsComponent } from './pending-reimbursements/view-resolved-reimbursements/view-resolved-reimbursements.component';


const routes: Routes = [
  { path: "view-pending-reimbursements", component: ViewPendingReimbursementsComponent},
  { path: "view-update-information", component: ViewUpdateInformationComponent},
  { path: "view-all-employees", component: ViewAllEmployeesComponent},
  { path: "view-employee-reimbursement", component: ViewResolvedReimbursementsComponent},
  { path: "login", component: LoginComponent},
  { path: "view-resolved-reimbursements", component: ViewResolvedReimbursementsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }