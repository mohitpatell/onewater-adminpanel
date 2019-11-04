import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-suscribed',
  templateUrl: './user-suscribed.component.html',
  styleUrls: ['./user-suscribed.component.scss']
})
export class UserSuscribedComponent implements OnInit {

  constructor(public http:HttpClient) { }

  suscribed;

  ngOnInit() {
    this.http.get<{status:string, msg:string, result:any}>('https://onewater-job-api.herokuapp.com/suscribed')
    .subscribe(result=>{
      console.log(result);
      this.suscribed=result.result;
    })
  }

}
