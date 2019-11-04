import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllAuthorsComponent } from './all-authors.component';
import { Route, RouterModule } from '@angular/router';
const routes: Route[]=[
    {
    path: '',
    component: AllAuthorsComponent
    }
]

@NgModule({
declarations: [AllAuthorsComponent],
exports:[AllAuthorsComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AllAuthorsModule { }
