import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AuthordetailsComponent } from './authordetails.component';

const routes: Route[]=[
    {
    path: '',
    component: AuthordetailsComponent
    }
]

@NgModule({
declarations: [AuthordetailsComponent],
exports:[AuthordetailsComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AuthordetailsModule { }
