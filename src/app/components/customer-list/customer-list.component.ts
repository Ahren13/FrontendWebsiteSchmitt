import { Component, OnInit } from '@angular/core';
import { Customer } from '../../services/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  
  customers: any;
  currentCustomer = null;
  currentCustomerDetail = null;
  currentBuilding = null;
  currentDoor = null;
  
  //-1 damit es nicht sofort ausgewählt wird
  currentIndex = -1;
  currentIndexDetail =-1;

  currentIndex1 = -1;

  currentIndex2 = -1;

  name = '';
  currentCustomerId = null;
  customerDetails = null;

  buildings = null;

  doors = null;

  detailID = null;
  

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


    window.location.reload();


  }

  retriveDetails(customer, index){
    
    this.currentCustomer = customer;
    this.currentIndex = index;
    this.customerDetails = this.currentCustomer.kundenDetails
    //console.log(this.currentCustomer);
    /*console.log(this.customerDetails);
    console.log(this.currentIndex);
    console.log("testa"); */
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

  retriveBuildings(customerdet, i){
    this.currentCustomerDetail = customerdet;
    this.currentIndexDetail = i;
    this.buildings = this.currentCustomerDetail.buildings;
    this.detailID = this.currentCustomerDetail._id;
    console.log(this.detailID)
    
  }


  //***************************wurde nicht mehr benutzt**************************************//
  /* setActiveCustomerdetail(customerdet, index) {
    this.currentCustomerDetail = customerdet;
    this.currentIndex = index;
    console.log("currentCustomerDetail" + this.currentCustomerDetail);
  } */

  

  

  //***************************wurde nicht mehr benutzt**************************************//
  //unnötig, ist in retriveDetail noch drin 
  /* setActiveCustomer(customer, index) {
    this.currentCustomer = customer;
    this.currentIndex = index;

    console.log("testasdtsdt");
    
  }
 */
  

  //***************************wurde nicht mehr benutzt**************************************//
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


  //***************************wurde nicht mehr benutzt**************************************//
  deleteCustomer(customer,index) {
    console.log(this.currentCustomer);
    this.customerService.delete(this.currentCustomer._id)
      .subscribe(
        response => {
          
          console.log(response)
        
                 
        },
        error => {
          console.log(error);
        })
        this.refreshList(); 
  }

  


  //***************************wurde nicht mehr benutzt**************************************//
  /* retriveDetailCustomer(customer, index){
    
    console.log('ID: ' +customer);

    this.currentCustomerDetail = customer;
    this.currentIndex = index;
    this.customerDetails = this.currentCustomer.kundenDetails
    console.log("test + " +this.customerDetails);
    
  } */


  //***************************wurde nicht mehr benutzt**************************************//
  //unnötig, da retriveBuilding das schon macht  
  retrieveDoors(building, i){
    console.log(building);
    console.log(i);
    this.currentBuilding = building;
    this.currentIndex1 = i;

    this.doors = this.currentBuilding.doors;
    //this.currentCustomerDetail = building;
    //this.currentIndex1 = i;
  }
  
  check(door, i){
    console.log(door);
    console.log(i);
    this.currentDoor = door;
    this.currentIndex2= i;
  }

  deleteCustomerdetails() {
    
    this.customerService.deleteCustomersDetail(this.currentCustomer._id, this.currentCustomerDetail._id)
    .subscribe(
      response => {
        
        console.log(response)
      
               
      },
      error => {
        console.log(error);
      });
      this.refreshList();
     /* this.currentCustomer = customer;
     this.currentIndex = index;
     this.customerDetails = this.currentCustomer.kundenDetails
 */


    //this.customerService.deleteCustomersDetail()
  }
  deleteBuilding() {
    this.customerService.deleteBuilding(this.currentCustomer._id, this.currentCustomerDetail._id, this.currentBuilding._id)
    .subscribe(
      response => {
        
        console.log(response)
      
               
      },
      error => {
        console.log(error);
      });
      this.refreshList();
  }
}


