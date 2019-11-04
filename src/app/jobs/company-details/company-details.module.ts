import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CompanyDetailsComponent } from './company-details.component';

const routes: Route[]=[
    {
    path: '',
    component: CompanyDetailsComponent
    }
]

@NgModule({
declarations: [CompanyDetailsComponent],
exports:[CompanyDetailsComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class CompanyDetailsModule { }
