import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PendingAuthorDetailComponent } from './pending-author-detail.component';


const routes: Route[]=[
    {
    path: '',
    component: PendingAuthorDetailComponent
    }
]

@NgModule({
declarations: [PendingAuthorDetailComponent],
exports:[PendingAuthorDetailComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PendingAuthorDetailModule { }
