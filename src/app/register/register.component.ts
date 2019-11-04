import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newuser:FormGroup

  constructor(public auth:AuthService) { }
  submited:boolean=false;

  ngOnInit() {
    this.newuser= new FormGroup({
      email:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      password:new FormControl(null,{validators:[Validators.required]}),
      cpassword:new FormControl(null,{validators:[Validators.required]})
    });
  }
  signup(){
    this.submited=true
    if(this.newuser.invalid){
      return;
    }
    if(this.newuser.value.cpassword!=this.newuser.value.password){
      return alert("Password Not Matched");
    }

    this.auth.createUser(this.newuser);
    this.submited=false
    this.newuser.reset();
  }

}
