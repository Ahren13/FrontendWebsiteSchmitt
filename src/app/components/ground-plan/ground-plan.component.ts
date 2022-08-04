import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ground-plan',
  templateUrl: './ground-plan.component.html',
  styleUrls: ['./ground-plan.component.css']
})
export class GroundPlanComponent implements OnInit {

  currentCustomer = null;
  currentCustomerDetail = null;
  currentBuilding = null;

  currentDetails = null;

  pdfName = null;

  id1: any;
  id2: any;

  nameofplan: any;




  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  previews: string[] = [];
  imageInfos?: Observable<any>;
  constructor(private CustomerService: CustomerService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCustomer(this.route.snapshot.paramMap.get('id'));
    this.imageInfos = this.CustomerService.getFiles();
  }

  /* getCustomer(id) {
    this.CustomerService.get(id)
      .subscribe(
        data => {
          this.currentCustomer = data;
          this.id1 = this.route.snapshot.params['bid'];
          this.id2 = this.route.snapshot.params['cid'];
          console.log("id1 ---------------------------->" + this.id1);
          console.log("id2 ---------------------------->" + this.id2);

          console.log(data);
        },
        error => {
          console.log(error);
        });
  } */

  getCustomer(id) {
    this.CustomerService.get(id)
      .subscribe(
        data => {
          this.currentCustomer = data;
          this.id1 = this.route.snapshot.params['bid'];
          this.id2 = this.route.snapshot.params['cid'];
          console.log(this.id1);
          console.log(this.id2);
          console.log(data);

          for(let i = 0; i < this.currentCustomer.kundenDetails.length; i++) {
            if(this.currentCustomer.kundenDetails[i]._id == this.id1){
              this.currentDetails = this.currentCustomer.kundenDetails[i];
              console.log(this.currentDetails);
              console.log(this.currentDetails.location);
              console.log(this.currentDetails.buildings[0]);
            }
            else{
              continue;
            }
          }
          for(let j = 0; j < this.currentDetails.buildings.length; j++) {
            if(this.currentDetails.buildings[j]._id == this.id2){
              this.currentBuilding = this.currentDetails.buildings[j];
              console.log(this.currentBuilding);
              console.log(this.currentBuilding.buildingName);
              this.nameofplan = this.currentBuilding.grundrissPath;
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


  refreshList() {


    window.location.reload();


  }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };
       /*  reader.readAsDataURL(this.selectedFiles[i]); */
      }
    }
  }
  uploadFiles(): void {
    this.message = [];
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }
  upload(idx: number, file: File ): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    if (file) {
      this.CustomerService.upload(this.currentCustomer._id, this.id1, this.id2,file).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + file.name;
            this.message.push(msg);
          }
        },
        error: (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the file: ' + file.name;
          this.message.push(msg);
        }});
    }
  }

  downloadFile(grundriss, i){
    this.pdfName = grundriss.pfd_name;
    console.log();
    console.log(i);
    window.open(`http://localhost:8080/api/customers/${this.currentCustomer._id}/customersDetail/${this.id1}/building/${this.id2}/files/files/download/${grundriss.pdf_name}`);
    
  }
  openFile(grundriss, i){
    this.pdfName = grundriss.pfd_name;
    console.log();
    console.log(i);
    window.open(`http://localhost:8080/api/customers/${this.currentCustomer._id}/customersDetail/${this.id1}/building/${this.id2}/files/files/display/${grundriss.pdf_name}`);
    
  }

}
