import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUpdateInformationComponent } from './employee/view-update-information/view-update-information.component';
import { ApprovePendingReimbursementsComponent } from './pending-reimbursements/approve-pending-reimbursements/approve-pending-reimbursements.component';
import { DenyPendingReimbursementsComponent } from './pending-reimbursements/deny-pending-reimbursements/deny-pending-reimbursements.component';
import { ViewPendingReimbursementsComponent } from './pending-reimbursements/view-pending-reimbursements/view-pending-reimbursements.component';
import { ViewAllEmployeesComponent } from './view-employee/view-all-employees/view-all-employees.component';


const routes: Routes = [
  { path: "view-pending-reimbursements", component: ViewPendingReimbursementsComponent},
  { path: "approve-pending-reimbursements", component: ApprovePendingReimbursementsComponent},
  { path: "display", component: DenyPendingReimbursementsComponent},
  { path: "view-update-information", component: ViewUpdateInformationComponent},
  { path: "view-all-employees", component: ViewAllEmployeesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
