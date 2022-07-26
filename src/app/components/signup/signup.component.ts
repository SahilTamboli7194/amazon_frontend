import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/classes/user-details';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  user = new UserDetails();
  ngOnInit(): void {
  }

  getUserSignupData(){
    console.warn(this.user);
  }
}
