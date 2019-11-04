import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SingleJobCandidatesComponent } from './single-job-candidates.component';

const routes: Route[]=[
    {
    path: '',
    component: SingleJobCandidatesComponent
    }
]

@NgModule({
declarations: [SingleJobCandidatesComponent],
exports:[SingleJobCandidatesComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class SingleJobCandidatesModule { }
