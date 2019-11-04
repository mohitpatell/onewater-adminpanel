import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CandidateDetailsComponent } from './candidate-details.component';

const routes: Route[]=[
    {
    path: '',
    component: CandidateDetailsComponent
    }
]

@NgModule({
declarations: [CandidateDetailsComponent],
exports:[CandidateDetailsComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class CandidateDetailsModule { }
