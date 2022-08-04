import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/classes/user-details';
import { RolesService} from 'src/app/services/roles.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  rolestemp:any;
  roles:any;

  constructor(private rolesdata:RolesService) { }
  user = new UserDetails();
  ngOnInit(): void {
    this.getRoles();
  }

  getUserSignupData(){
    console.warn(this.user);
  }

  getRoles(){
    this.rolesdata.getRoles().subscribe((res)=>{
      this.rolestemp = res;
      this.roles = this.rolestemp.roles.data;
      console.warn(this.roles);
    })
  }
}
