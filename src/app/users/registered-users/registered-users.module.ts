import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { RegisteredUsersComponent } from './registered-users.component';

const routes: Route[]=[
    {
    path: '',
    component: RegisteredUsersComponent
    }
]

@NgModule({
declarations: [RegisteredUsersComponent],
exports:[RegisteredUsersComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class RegisteredUsersModule { }
