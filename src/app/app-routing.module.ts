import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent} from './components/customer-list/customer-list.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { ContractForAppComponent } from './components/contract-for-app/contract-for-app.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { DoorsAddComponent } from './components/doors-add/doors-add.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { BuildingAddComponent } from './components/building-add/building-add.component';


const routes: Routes = [
  { path: '', redirectTo: 'costumers', pathMatch: 'full'},
  { path: 'costumers', component: CustomerListComponent },
  { path: 'costumers/add', component: CustomerAddComponent },
  { path: 'customers/:id', component: CustomerDetailComponent},
  { path: 'contract-for-app', component: ContractForAppComponent },
  { path: 'door-add/:id/:bid/:cid', component: DoorsAddComponent },
  { path: 'update-customer/:id', component: UpdateCustomerComponent },
  { path: 'building-add/:id/:bid', component: BuildingAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
