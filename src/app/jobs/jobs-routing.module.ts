import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'joblist',
      loadChildren: './job-list/job-list.module#JobListModule'
  },
  {
    path: 'jobdetails/:id',
      loadChildren: './job-details/job-details.module#JobDetailsModule'
  },
  {
    path: 'candidatelist',
    loadChildren: './candidate-list/candidate-list.module#CandidateListModule'
  },
  {
    path: 'candidatedetails/:id',
    loadChildren: './candidate-details/candidate-details.module#CandidateDetailsModule'
  },
  {
    path: 'companylist',
    loadChildren: './company-list/company-list.module#CompanyListModule'
  },
  {
    path: 'companydetails/:id',
    loadChildren: './company-details/company-details.module#CompanyDetailsModule'
  },
  {
    path: 'single-job-can/:id',
    loadChildren: './single-job-candidates/single-job-candidates.module#SingleJobCandidatesModule'
  },
  {
    path: 'single-can-jobs/:id',
    loadChildren: './single-candidate-jobs/single-candidate-jobs.module#SingleCandidateJobsModule'
  },
  {
    path: 'single-company-jobs/:id',
    loadChildren: './single-company-jobs/single-company-jobs.module#SingleCompanyJobsModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class JobsRoutingModule { }
