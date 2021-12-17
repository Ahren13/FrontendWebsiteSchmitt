import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-doors-add',
  templateUrl: './doors-add.component.html',
  styleUrls: ['./doors-add.component.css']
})
export class DoorsAddComponent implements OnInit {

  currentCustomer = null;

  doorData = {
    year: '',
    number: '',
    hint: '',
    nktip: '',
    typ: '',
    din: ''
  };

  buttonCheck = false;
  disabled = false;

  constructor(
    private CustomerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCustomer(this.route.snapshot.paramMap.get('id'));
    console.log(this.currentCustomer.kundenDetails[0].buildings[0]._id);
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

  saveDoor(){
     
    const dataDoor = {
      year : this.doorData.year,
      number: this.doorData.number,
      hint : this.doorData.hint,
      nktip : this.doorData.nktip,
      typ : this.doorData.typ,
      din : this.doorData.din,


    };

    console.log(dataDoor);
    console.log(this.currentCustomer);

    this.CustomerService.createDoor(this.currentCustomer._id, this.currentCustomer.kundenDetails[0]._id, this.currentCustomer.kundenDetails[0].buildings[0]._id ,dataDoor)
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
    this.doorData = {
      year: '',
      number: '',
      hint: '',
      nktip: '',
      typ: '',
      din: ''
    };
  }

}
