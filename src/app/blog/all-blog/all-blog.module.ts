import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AllBlogComponent } from './all-blog.component';
import { NgxMasonryModule } from 'ngx-masonry';
const routes: Route[]=[
    {
    path: '',
    component: AllBlogComponent
    }
]

@NgModule({
declarations: [AllBlogComponent],
exports:[AllBlogComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgxMasonryModule
  ]
})

export class AllBlogModule { }
