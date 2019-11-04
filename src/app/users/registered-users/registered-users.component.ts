import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.scss']
})
export class RegisteredUsersComponent implements OnInit {

  users;
  constructor(public auth:AuthService) { }

  ngOnInit() {
    this.auth.getUsers()
    .subscribe(result=> {
      console.log(result);
      this.users=result.users;
    })
  }

}
