import { Component, OnInit } from '@angular/core';
import { Customer } from '../../services/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerListComponent } from '../customer-list/customer-list.component';


@Component({
  selector: 'app-customer-add',
  templateUrl: 
  './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {


  customer = {
    name: '',
    billingAddress: '',
    contactPerson: '',
    email: '',
    mobileNumber: '',
  };

  buttonCheck = false;
  disabled = false; 
 /*  public customerName: string;
  public customerBillingAddress: string;
  public customerContactPerson: string;
  public customerEmail: string;
  public customerNumber: number;
  public customerList: Customer[] = new Array(); */

  constructor(
  private customerService: CustomerService
  ) { }
            
  ngOnInit(): void {
  }

  saveCustomer() {
    const data = {
      name: this.customer.name,
      billingAddress: this.customer.billingAddress,
      contactPerson: this.customer.contactPerson,
      email: this.customer.email,
      mobileNumber: this.customer.mobileNumber
    };

    

    this.customerService.create(data)
      .subscribe(
        response => {
          console.log(response);
          
        },
        error => {
          console.log(error);
        });
        this.buttonCheck = true;
        this.disabled = true;
  }

  releaseInputs(){
    this.disabled = false;
    this.buttonCheck = false;
    this.customer = {
      name: '',
      billingAddress: '',
      contactPerson: '',
      email: '',
      mobileNumber: '',
    };
  }
  
    
    
  }
  