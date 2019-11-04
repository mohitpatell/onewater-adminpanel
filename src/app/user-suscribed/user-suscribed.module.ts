import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserSuscribedComponent } from './user-suscribed.component';

const routes: Route[]=[
    {
    path: '',
    component: UserSuscribedComponent
    }
]

@NgModule({
declarations: [UserSuscribedComponent],
exports:[UserSuscribedComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ]
})
export class UserSuscribedModule { }
