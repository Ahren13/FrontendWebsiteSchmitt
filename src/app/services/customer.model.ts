import { CustomerDetail} from 'src/app/services/customerDetail.model'

export class Customer  {
     name: string;
     billingAddress: string;
     contactPerson: string;
     email: string;
     mobileNumber: number; 
     
     customerDetail: CustomerDetail[];
     
     

    /* constructor(name: string, bA: string, cP: string,em: string,mN: number){
        this.name = name;
        this.billingAddress = bA;
        this.contactPerson = cP;
        this.email = em;
        this.mobileNumber = mN;
    } */
}