import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './component/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './component/update-customer/update-customer.component';
import { NavComponent } from './component/nav/nav.component';
import { ProspectSetComponent } from './component/prospect-set-shared-ui/prospect-set.component';
import { TestSetComponent } from './component/test-set/test-set.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { CustomerComponent } from './component/customer/customer.component';
import { ProspectCustomerComponent } from './component/prospect-customer/prospect-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { TriggerEventComponent } from './component/nav-menu-component/trigger-event/trigger-event.component';
import { CampaignComponent } from './component/nav-menu-component/campaign/campaign.component';
import { EmailTemplateComponent } from './component/nav-menu-component/email-template/email-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerInfoComponent } from './component/nav-menu-component/customer-info/customer-info.component';
import { UserComponent } from './component/nav-menu-component/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    NavComponent,
    ProspectSetComponent,
    TestSetComponent,
    EmployeeComponent,
    CustomerComponent,
    ProspectCustomerComponent,
    TriggerEventComponent,
    EmailTemplateComponent,
    CampaignComponent,
    CustomerInfoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
