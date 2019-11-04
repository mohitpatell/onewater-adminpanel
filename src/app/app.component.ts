import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'onewater-admin';
  showHeader;
  logstatus:Subscription;
  constructor(public router:Router, private auth: AuthService){}

  ngOnInit(){
    this.auth.checkLocalStorage();
    // this.auth.authLitsener()
    // .subscribe(result=>{
    //   console.log(result)
    //   this.showHeader=result.status
    // })
    const temp=this.auth.isUserAuthenticated();
    this.showHeader=temp

    this.logstatus=this.auth.authLitsener()
    .subscribe((response)=>{
      console.log(response)
      this.showHeader=response.status
    })
    // this.router.events.forEach((event) => {
    //   if (event instanceof NavigationStart) {
    //     if (event['url'] == '/login' || event['url'] == '/register') {
    //       console.log('login')
    //       this.showHeader = false;
    //     } else {
    //       this.showHeader = true;
    //     }

    //   }
    // });
  }

}
