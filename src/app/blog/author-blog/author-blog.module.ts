import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AuthorBlogComponent } from './author-blog.component';
import { NgxMasonryModule } from 'ngx-masonry';
const routes: Route[]=[
    {
    path: '',
    component: AuthorBlogComponent
    }
]

@NgModule({
declarations: [AuthorBlogComponent],
exports:[AuthorBlogComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgxMasonryModule
  ]
})
export class AuthorBlogModule { }
