import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './component/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './component/update-customer/update-customer.component';
import { ProspectSetComponent } from './component/prospect-set-shared-ui/prospect-set.component';
import { CustomerComponent } from './component/customer/customer.component';
import { ProspectCustomerComponent } from './component/prospect-customer/prospect-customer.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { TestSetComponent } from './component/test-set/test-set.component';
import { TriggerEventComponent } from './component/nav-menu-component/trigger-event/trigger-event.component';
import { EmailTemplateComponent } from './component/nav-menu-component/email-template/email-template.component';
import { CampaignComponent } from './component/nav-menu-component/campaign/campaign.component';
import { CustomerInfoComponent } from './component/nav-menu-component/customer-info/customer-info.component';
import { UserComponent } from './component/nav-menu-component/user/user.component';


const routes: Routes = [
  { path: '', component: CustomerComponent},
  { path: 'create', component: CreateCustomerComponent },
  { path: 'update/:id',component: UpdateCustomerComponent },
  { path : 'customer-info/:id', component: CustomerInfoComponent},
  { path: 'trigger-event',component: TriggerEventComponent },
  { path: 'email-template', component : EmailTemplateComponent},
  { path: 'prospect-set',redirectTo:'',component: ProspectSetComponent },
  { path: 'campaign' , component: CampaignComponent},
  { path: 'user', component: UserComponent},
  { path: 'prospect-set/customer', component: CustomerComponent },
  { path: 'prospect-set/prospect-customer', component: ProspectCustomerComponent},
  { path: 'prospect-set/employee', component: EmployeeComponent },
  { path: 'prospect-set/test-set', component: TestSetComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
