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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ViewPendingReimbursementsComponent,
    ApprovePendingReimbursementsComponent,
    DenyPendingReimbursementsComponent,
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
