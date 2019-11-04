import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingAuthorsComponent } from './pending-authors.component';
import { Route, RouterModule } from '@angular/router';
const routes: Route[]=[
    {
    path: '',
    component: PendingAuthorsComponent
    }
]

@NgModule({
declarations: [PendingAuthorsComponent],
exports:[PendingAuthorsComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PendingAuthorsModule { }
