import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  url ='http://localhost/api/categories/';
  constructor(private httpclinet:HttpClient) { }

  getCategories(){
    return this.httpclinet.get(this.url);
  }
}
