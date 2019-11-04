import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list.component';

const routes: Route[]=[
    {
    path: '',
    component: CompanyListComponent
    }
]

@NgModule({
declarations: [CompanyListComponent],
exports:[CompanyListComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class CompanyListModule { }
