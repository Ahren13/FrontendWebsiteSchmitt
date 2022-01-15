import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-update-customer-detail',
  templateUrl: './update-customer-detail.component.html',
  styleUrls: ['./update-customer-detail.component.css']
})
export class UpdateCustomerDetailComponent implements OnInit {

  currentCustomer = null;
  currentDetails = null;
  id1 = null;
  id2 = null;
  buttonCheck = false;
  disabled = false; 

  constructor(
    private CustomerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    
   }
   
  ngOnInit(): void {
    this.getCustomer(this.route.snapshot.paramMap.get('id')); 
  }

  //###########################Update Customer by ID & get the right customerdetails!!!!!!!###########################
  //Didnt know how to do the for loop into a single method and currentCustomer is updated as soon as page loads(always had empty fields...thinking its a observable problem)
  getCustomer(id) {
    this.CustomerService.get(id)
      .subscribe(
        data => {
          this.currentCustomer = data;
          
          console.log(data);
          
          this.id1 = this.route.snapshot.params['bid'];
    

     for(let i = 0; i < this.currentCustomer.kundenDetails.length; i++) {
       if(this.currentCustomer.kundenDetails[i]._id == this.id1){
         this.currentDetails = this.currentCustomer.kundenDetails[i];
         console.log(this.currentDetails);
         //console.log(this.currentDetails.location);
       }
       else{
         continue;
       }
     }
          
        },
        error => {
          console.log(error);
        });
  }

/*   testId() {
    console.log(this.id1);
    console.log(this.currentCustomer.kundenDetails.length);
  } */

  getKundendetails() {
    this.id1 = this.route.snapshot.params['bid'];
    
     for(let i = 0; i < this.currentCustomer.kundenDetails.length; i++) {
       if(this.currentCustomer.kundenDetails[i]._id == this.id1){
         this.currentDetails = this.currentCustomer.kundenDetails[i];
         //console.log(this.currentDetails);
         //console.log(this.currentDetails.location);
       }
       else{
         continue;
       }
     } 
     
  }

  

  updateCustomerDetail(){
      const data = {
        "location": this.currentDetails.location,
        "contactPerson": this.currentDetails.contactPerson,
        "contactPersonEmail": this.currentDetails.contactPersonEmail,
        "contactPersonMobile": this.currentDetails.contactPersonMobile,
        "maintenanceContract":  this.currentDetails.maintenanceContract,
        "maintenanceInterval": this.currentDetails.maintenanceInterval,
        "calendarWeek": this.currentDetails.calendarWeek,
        "noteField": this.currentDetails.noteField
      };
  
      console.log("data to send:");
      console.log(data);

    this.CustomerService.updateCustomersDetail(this.currentCustomer._id,this.id1,data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }); 
       this.buttonCheck = true;
        this.disabled = true; 
  }

  

}
