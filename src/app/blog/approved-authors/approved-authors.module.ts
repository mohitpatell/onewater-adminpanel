import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovedAuthorsComponent } from './approved-authors.component';
import { Route, RouterModule } from '@angular/router';
const routes: Route[]=[
    {
    path: '',
    component: ApprovedAuthorsComponent
    }
]

@NgModule({
declarations: [ApprovedAuthorsComponent],
exports:[ApprovedAuthorsComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ApprovedAuthorsModule { }
