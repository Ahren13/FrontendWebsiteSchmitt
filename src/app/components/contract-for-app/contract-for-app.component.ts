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

  customerforApp = null;

  
  currentCustomerDetail = null;
  customerDetails = null;
  currentIndexDetail = null;
  mystring = '';

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
          
     for(let j=0;j<this.customers.length; j++){
      if(this.customers[j].forApp == true){
        this.customerforApp = this.customers[j];
      }
      else{
        continue;
      }
      }
      console.log(this.customerforApp);
      
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
    
    this.currentIndex = index;
    this.customerDetails = this.currentCustomer.kundenDetails
    console.log(this.currentCustomer);
  }

  contractForApp(){
    for(let j=0;j<this.customers.length; j++){
      if(this.customers[j].forApp == true){
        this.customers[j].forApp = false;
        
        const data1 = {
          "forApp": this.customers[j].forApp
        }

        this.customers[j].forApp = false;
        this.customerService.update(this.customers[j]._id,data1).subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          });
      }
      else{
        continue;
      }
    }
    this.currentCustomer.forApp = true;
    console.log(this.currentCustomer)

      const data = {
        "forApp": this.currentCustomer.forApp,
      };
  
      console.log(data);
  
      this.customerService.update(this.currentCustomer._id,data).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
        window.location.reload();
  }

  ListofContractsforApp(customerforApp,i){
    
  }



  /* setActiveCustomerdetail(customerdet, index) {
  
    this.currentCustomerDetail = customerdet;
    this.currentIndexDetail = index;
    
    console.log(this.currentCustomerDetail);
    this.mystring = this.currentCustomerDetail.calendarWeek.slice(0, 10)
  } */

  /* retriveDetails(customer, index){
    this.currentCustomer = customer;
    this.currentIndex = index;
    this.customerDetails = this.currentCustomer.kundenDetails
    
    
    /* console.log(this.currentCustomer);
    console.log(this.customerDetails);
    console.log("index" +this.currentIndex);
    console.log("testa");  
  } */

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

  /* deleteCustomer() {
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
  } */

  /* searchName() {
    console.log(this.name);
    this.customerService.findByName(this.name)
      .subscribe(
        data => {
          this.customers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  } */
}



