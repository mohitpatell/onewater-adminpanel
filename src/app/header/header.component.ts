import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit() {
    let navControl = document.querySelector('.nav-control');
    let hamburger = document.querySelector('.hamburger');
    let mainWrapper = document.getElementById('main-wrapper');
    let userImg = document.querySelector(".user-img");
    let ddProfile = document.querySelector(".dropdown-profile");

    $(userImg).on('click', function() {

      $(ddProfile).toggleClass("show-dropdown");
        // $(mainWrapper).toggleClass("menu-toggle");
        // $(hamburger).toggleClass("is-active");
        // console.log("hello");

    });
    $(window).on('click', function() {
      $(ddProfile).removeClass("show-dropdown");
  });

}

logout(){
  this.auth.logout();
}
}
