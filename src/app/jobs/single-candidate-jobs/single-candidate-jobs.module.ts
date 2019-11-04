import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { SingleCandidateJobsComponent } from './single-candidate-jobs.component';

const routes: Route[]=[
    {
    path: '',
    component: SingleCandidateJobsComponent
    }
]

@NgModule({
declarations: [SingleCandidateJobsComponent],
exports:[SingleCandidateJobsComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class SingleCandidateJobsModule { }
