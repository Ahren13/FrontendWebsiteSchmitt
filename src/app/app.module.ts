import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { ContractForAppComponent } from './components/contract-for-app/contract-for-app.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { DoorsAddComponent } from './components/doors-add/doors-add.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { BuildingAddComponent } from './components/building-add/building-add.component';
import { UpdateCustomerDetailComponent } from './components/update-customer-detail/update-customer-detail.component';





@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerAddComponent,
    ContractForAppComponent,
    CustomerDetailComponent,
    DoorsAddComponent,
    UpdateCustomerComponent,
    BuildingAddComponent,
    UpdateCustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
