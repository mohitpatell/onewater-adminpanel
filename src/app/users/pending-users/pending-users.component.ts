import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-users',
  templateUrl: './pending-users.component.html',
  styleUrls: ['./pending-users.component.scss']
})
export class PendingUsersComponent implements OnInit {
users=[
  {
      name:'Mandeep Baghel',
      img:'assets/images/avatar/1.jpg',
      email:'mandeep@gmail.com',
      regdate:'10/12/2019'
  },
  {
    name:'Mandeep Baghel',
    img:'assets/images/avatar/1.jpg',
    email:'mandeep@gmail.com',
    regdate:'10/12/2019'
},
{
  name:'Mandeep Baghel',
  img:'assets/images/avatar/1.jpg',
  email:'mandeep@gmail.com',
  regdate:'10/12/2019'
},
{
  name:'Mandeep Baghel',
  img:'assets/images/avatar/1.jpg',
  email:'mandeep@gmail.com',
  regdate:'10/12/2019'
}
]
  constructor() { }

  ngOnInit() {
  }

}
