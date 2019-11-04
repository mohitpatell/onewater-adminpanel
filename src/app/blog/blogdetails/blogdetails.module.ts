import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { BlogdetailsComponent } from './blogdetails.component';


const routes: Route[]=[
    {
    path: '',
    component: BlogdetailsComponent
    }
]

@NgModule({
declarations: [BlogdetailsComponent],
exports:[BlogdetailsComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class BlogdetailsModule { }
