import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = "http://localhost:7000/customers";
  constructor(
    private http: HttpClient
  ) { }

  getCustomerList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getCustomer(id): Observable<any> {
    return this.http.get(this.baseUrl + `/${id}`);
  }

  createCustumer(prospectName, demographic, source, addedBy, setType, howMany): Observable<any> {
    return this.http.post(this.baseUrl, { prospectName, demographic, source, addedBy, setType, howMany }, {
      responseType: 'text'
    })
  }

  updateCustomer(id, prospectName, demographic, source, addedBy, setType, howMany): Observable<any> {
    const api = this.baseUrl + `/${id}`;

    return this.http.put(api, { prospectName, demographic, source, addedBy, setType, howMany }, {
      responseType: "text"
    });
  }

  deleteCustomer(id): Observable<any> {
    const api = this.baseUrl + `/${id}`;
    return this.http.delete(api)
  }
}
