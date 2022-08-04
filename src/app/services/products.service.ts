import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'http://localhost/api/products/';

  constructor(private httpClinet: HttpClient) {}

  getProducts() {

    return  this.httpClinet.get(this.url);

  }

  getProduct(data:any){

    return this.httpClinet.get(this.url+data);

  }
}
