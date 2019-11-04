import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ApprovedBlogComponent } from './approved-blog.component';
import { NgxMasonryModule } from 'ngx-masonry';
const routes: Route[]=[
    {
    path: '',
    component: ApprovedBlogComponent
    }
]

@NgModule({
declarations: [ApprovedBlogComponent],
exports:[ApprovedBlogComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgxMasonryModule
  ]
})
export class ApprovedBlogModule { }
