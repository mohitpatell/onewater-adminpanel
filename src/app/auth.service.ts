import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import { Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class AuthService {

    readonly baseURL = 'https://onewater-video-api.herokuapp.com';
    public email='';


    public loggedIn:boolean=false;
    private token:string=null;
    public loggedinLitsener=new Subject<{status:boolean}>();

    constructor(private http:HttpClient, public router:Router){}

    getToken(){
        return this.token;
    }

    isUserAuthenticated(){
      return this.loggedIn;
  }

    createUser(temp){
console.log(temp)
        const newuser={
            email:temp.value.email,
            password:temp.value.password
        }
        console.log(newuser)
        this.http.post<{msg:string}>(`${this.baseURL}/Newuser`,newuser)
        .subscribe(response=>{
            console.log(response);
                alert(response.msg);
        })
    }

    checkLocalStorage(){
        const token=localStorage.getItem('OneWaterAdmintoken');
        if(token){
          console.log('hit 1223')
      this.loggedIn=true
      this.loggedinLitsener.next({
          status:this.loggedIn
      })
      this.token=token;
      this.router.navigate(['dashboard']);
      }


    }

    login(temp){
        //console.log(temp);
        const user={
            email:temp.value.email,
            password:temp.value.password
        }
        this.http.post<{msg:string,token:string}>(`${this.baseURL}/Login`,user)
        .subscribe(response=>{
          console.log(response)
            alert(response.msg)
                this.token=response.token
                if(this.token){
                    this.email=temp.value.email;
                    localStorage.setItem('OneWaterAdmintoken',this.token);
                    this.loggedIn=true;
                    this.loggedinLitsener.next({
                        status:this.loggedIn
                    })
                    this.router.navigate(['/dashboard']);
                }
        })
    }

    authLitsener(){
        return this.loggedinLitsener.asObservable();
    }

    resetPassword(temp){
        const password={
            email:this.email,
            password:temp.value.password
        }
        //console.log(password)
        this.http.post<{msg:string}>(`${this.baseURL}/Resetpassword`,password)
        .subscribe(response=>{
            console.log(response);
                alert(response.msg);
        })
    }

    logout(){
        this.token=null;
        this.loggedIn=false;
        this.loggedinLitsener.next({
               status:false
        })
        localStorage.setItem('OneWaterAdmintoken','');
        this.router.navigate(['/login'])
    }

    getUsers(){
      return this.http.get<{msg:any, users:any}>(`${this.baseURL}/listUser`)
    }


}
