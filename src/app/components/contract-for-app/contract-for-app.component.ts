import { Component, OnInit } from '@angular/core';
import { Customer } from '../../services/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-contract-for-app',
  templateUrl: './contract-for-app.component.html',
  styleUrls: ['./contract-for-app.component.css']
})
export class ContractForAppComponent implements OnInit {

  customers: any;
  currentCustomer = null;
  currentIndex = -1;
  name = '';

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.retrieveCustomers();
  }
  
  retrieveCustomers() {
    this.customerService.getAll()
      .subscribe(
        data => {
          this.customers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveCustomers();
    this.currentCustomer = null;
    this.currentIndex = -1;
  }

  setActiveCustomer(customer, index) {
    this.currentCustomer = customer;
    this.currentIndex = index;
  }

  /* removeAllCustomers() {
    this.customerService.delete(this.currentCustomer.id)
      .subscribe(
        response => {
          console.log(response);
          this.retrieveCustomers();
        },
        error => {
          console.log(error);
        });
  } */

  deleteCustomer() {
    console.log(this.currentCustomer);
    this.customerService.delete(this.currentCustomer._id)
      .subscribe(
        response => {
          console.log(response);
          this.retrieveCustomers();
        },
        error => {
          console.log(error);
        });
  }

  searchName() {
   /*  console.log(this.name);
    this.customerService.findByName(this.name)
      .subscribe(
        data => {
          this.customers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }); */
  }
}



