import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  currentCustomer = null;
  message = '';
  wartungsvertragTrue = true;
  wartungsvertragFalse = false;
  build = 'Gebäude1';

  customerDetail = {
    location: '',
    contactPerson: '',
    contactPersonEmail: '',
    contactPersonMobile: '',
    maintenanceContract: false,
    maintenanceInterval: 'halbjährlich',
    calendarWeek: '',
    building: [],
    noteField: ''
  };

  public buildingList = [];
  public building;


  buttonCheck = false;
  disabled = false;
  noInput = false;
  model: NgbDateStruct = {
    year:2022,
    month:1,
    day:1,
  };
  

  
  
  


  constructor(private CustomerService: CustomerService,
              private route: ActivatedRoute,
              private router: Router,
              private parserFormatter: NgbDateParserFormatter
              ) { }
              

  ngOnInit(): void {
    this.message = '';
    this.getCustomer(this.route.snapshot.paramMap.get('id'));
    
  }

  getCustomer(id) {
    this.CustomerService.get(id)
      .subscribe(
        data => {
          this.currentCustomer = data;
          
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  
  
  
//###########################Yes and No button not necessary anymore cause it switched to form select###########################
  /* yesButton(){
    this.customerDetail.maintenanceContract = true;
    console.log(this.customerDetail.maintenanceContract);
    return this.customerDetail.maintenanceContract;
    
    
  }
  

  noButton(){
    
    this.customerDetail.maintenanceContract = false;
    console.log("maintenanceContract->>>>>> " + this.customerDetail.maintenanceContract);
    return this.customerDetail.maintenanceContract;
  }
 */
  /* updatePublished(status) {
    const data = {
      name: this.currentCustomer.name,
      emptySt: this.currentCustomer.emptySt      
    };

    this.CustomerService.update(this.currentCustomer.id, data)
      .subscribe(
        response => {
          
          console.log(response);
        },
        error => {
          console.log(error);
        });
  } */

  saveCustomerDetail(){

  this.customerDetail.calendarWeek = this.parserFormatter.format(this.model);
    

    const dataDetail = {
      location: this.customerDetail.location,
      contactPerson: this.customerDetail.contactPerson,
      contactPersonEmail: this.customerDetail.contactPersonEmail,
      contactPersonMobile: this.customerDetail.contactPersonMobile,
      maintenanceContract: this.customerDetail.maintenanceContract,
      maintenanceInterval: this.customerDetail.maintenanceInterval,
      calendarWeek: this.customerDetail.calendarWeek,
      noteField: this.customerDetail.noteField
    };

    this.CustomerService.createCustomersDetail(this.currentCustomer._id, dataDetail, )
      .subscribe(
        response => {
          console.log(response);
          console.log("ok, lets go");
        },
        error => {
          console.log(error);
          console.log("we not finished");
          this.noInput = true
        },
        () => {
        this.buttonCheck = true;
        this.disabled = true;
        this.noInput = false;
        console.log("complete"); 
        });
  }

  /* updateCustomer() {
    this.CustomerService.update(this.currentCustomer._id, this.currentCustomer)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Customer was updated successfully!';
        },
        error => {
          console.log(error);
        });
  } */

  /* deleteCustomer() {
    this.CustomerService.delete(this.currentCustomer.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/costumers']);
        },
        error => {
          console.log(error);
        });
  } */

  /* addBuilding(build){
    const i = this.currentCustomer.customerDetail.building.length
    baba = this.currentCustomer.customerDetail.building[i+1] */
    /* console.log(build);
    this.customerDetail.building.push(build);
    console.log(this.customerDetail.building); 
    
  } */

  /* addCourse() {
    this.buildingList.push(this.building);
    console.log(this.buildingList);
    this.building = '';

  } */

  releaseInputs(){
    this.disabled = false;
    this.buttonCheck = false;
    this.customerDetail = {
      location: '',
      contactPerson: '',
      contactPersonEmail: '',
      contactPersonMobile: '',
      maintenanceContract: false,
      maintenanceInterval: 'halbjährlich',
      calendarWeek: '',
      building: [],
      noteField: ''
    };
  }
}