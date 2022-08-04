import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


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

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;

  


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
  openPdf() : void {
  
  window.open("http://localhost:8080/api/photos/files/1658506417206-wolpert-studienbescheinigung.pdf");
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    this.fileInfos = this.CustomerService.getFiles();
  }

 /*  upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.CustomerService.upload(this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.CustomerService.getFiles();
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          });
      }
      this.selectedFiles = undefined;
    }
  } */

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
