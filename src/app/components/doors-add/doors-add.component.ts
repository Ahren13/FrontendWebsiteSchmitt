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

  id1: any;
  id2: any;

  doorData = {
    number: '',
    hint: '',
    function: '',
    typ: '',
    din: '',
    supplierab: '',
    projectNbOld: '',
    supplierabPos: '',
    yearFirstCheck: ''
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
          this.id1 = this.route.snapshot.params['bid'];
          this.id2 = this.route.snapshot.params['cid'];
          console.log("id1 ---------------------------->" + this.id1);
          console.log("id2 ---------------------------->" + this.id2);

          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  saveDoor(){
     
    const dataDoor = {
      number: this.doorData.number,
      hint: this.doorData.hint,
      function: this.doorData.hint,
      typ: this.doorData.typ,
      din: this.doorData.din,
      supplierab: this.doorData.supplierab,
      projectNbOld: this.doorData.projectNbOld,
      supplierabPos: this.doorData.supplierabPos,
      yearFirstCheck: this.doorData.yearFirstCheck
    };

    console.log(dataDoor);
    console.log(this.currentCustomer);

    this.CustomerService.createDoor(this.currentCustomer._id, this.id1, this.id2 ,dataDoor)
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
      number: '',
      hint: '',
      function: '',
      typ: '',
      din: '',
      supplierab: '',
      projectNbOld: '',
      supplierabPos: '',
      yearFirstCheck: ''
    };
  }

}
