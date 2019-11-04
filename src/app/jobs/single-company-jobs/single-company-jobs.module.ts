import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SingleCompanyJobsComponent } from './single-company-jobs.component';

const routes: Route[]=[
    {
    path: '',
    component: SingleCompanyJobsComponent
    }
]

@NgModule({
declarations: [SingleCompanyJobsComponent],
exports:[SingleCompanyJobsComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class SingleCompanyJobsModule { }
