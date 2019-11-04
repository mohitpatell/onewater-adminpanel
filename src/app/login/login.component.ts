import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:FormGroup

  constructor(public auth:AuthService) { }
  submited:boolean=false;

  ngOnInit() {
    this.user= new FormGroup({
      email:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      password:new FormControl(null,{validators:[Validators.required]})
    });
  }

  login(){
    this.submited=true
    if(this.user.invalid){
      return;
    }
    this.auth.login(this.user);
  }

}
