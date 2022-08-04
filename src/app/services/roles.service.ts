import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  url = 'http://localhost/api/roles';
  constructor(private httpclient:HttpClient) { }

  getRoles(){

    return this.httpclient.get(this.url);

  }
}
