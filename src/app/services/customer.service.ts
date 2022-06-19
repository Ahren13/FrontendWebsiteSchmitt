import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 

const baseUrl = 'http://localhost:8080/api/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  //###########################Create Customer###########################
  create(data) {
    return this.http.post(baseUrl, data);
  }
  //###########################Get all Customer###########################
  getAll() {
    return this.http.get(baseUrl);
  }

  //###########################get Customer by ID###########################
  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  
  //###########################Update Customer by ID###########################
  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  //###########################Delete Customer by ID###########################
  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  /* deleteAll() {
    return this.http.delete(baseUrl);
  } */

  //TODO: richtiges findbymyname machen
  /* findByName(name) {
    return this.http.get(`${baseUrl}?name=${name}`);
  } */

  //###########################Create Customerdetail###########################
  createCustomersDetail(id, data){
    return this.http.post(`${baseUrl}/${id}/customersDetail`, data, {responseType: 'text'})
  }

  //###########################Delete Customerdetail###########################
  deleteCustomersDetail(id, bid){
    return this.http.delete(`${baseUrl}/${id}/customersDetail/${bid}`)
  }

  //###########################Update Customerdetail###########################
  updateCustomersDetail(id, bid, data){
    return this.http.put(`${baseUrl}/${id}/customersDetail/${bid}`, data)
  }

  //###########################Create Building###########################
  createBuilding(id, bid, data){
    return this.http.post(`${baseUrl}/${id}/customersDetail/${bid}/building`, data)
  }

  //###########################Delete Building###########################
  deleteBuilding(id, bid, cid){
    return this.http.delete(`${baseUrl}/${id}/customersDetail/${bid}/building/${cid}`)
  }

  //###########################Create Door###########################
  createDoor(id, bid, cid, data){
    return this.http.post(`${baseUrl}/${id}/customersDetail/${bid}/building/${cid}/door`, data)
  }
  

  


}
