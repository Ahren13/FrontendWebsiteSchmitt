import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-building-add',
  templateUrl: './building-add.component.html',
  styleUrls: ['./building-add.component.css']
})
export class BuildingAddComponent implements OnInit {
  selectedFile: any;

  /* public href: string = ""; */

  currentCustomer = null;
  currentDetails = null;

  id1;
  buttonCheck = false;
  disabled = false;

  buildingData = {
    buildingName : ''
  }

  constructor(
    private CustomerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    /* this.href = this.router.url;
        console.log(this.router.url); */
        this.getCustomer(this.route.snapshot.paramMap.get('id'));
  }

  getCustomer(id) {
    this.CustomerService.get(id)
      .subscribe(
        data => {
          this.currentCustomer = data;
          this.id1 = this.route.snapshot.params['bid'];
          console.log(this.id1);
          
          console.log(data);

          for(let i = 0; i < this.currentCustomer.kundenDetails.length; i++) {
            if(this.currentCustomer.kundenDetails[i]._id == this.id1){
              this.currentDetails = this.currentCustomer.kundenDetails[i];
              console.log(this.currentDetails);
              console.log(this.currentDetails.location);
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


  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
    console.log("selected FILE --------> " + this.selectedFile)
  }

  saveBuilding(){
     
    const dataBuilding = {
      buildingName : this.buildingData.buildingName
    };

    console.log(dataBuilding);

    this.CustomerService.createBuilding(this.currentCustomer._id, this.id1, dataBuilding)
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
    this.buildingData = {
      buildingName: ''
    };
  }


 /*  saveBuilding() {
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
          this.buttonCheck = true;
        },
        error => {
          console.log(error);
        });

        this.disabled = true;
  } */
}
