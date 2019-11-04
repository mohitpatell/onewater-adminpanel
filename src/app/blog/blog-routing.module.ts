import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: 'approvedblogs',
    loadChildren: './approved-blog/approved-blog.module#ApprovedBlogModule'
},
{
  path: 'pendingblogs',
  loadChildren: './pending-blog/pending-blog.module#PendingBlogModule'
},
{
  path: 'allblogs',
  loadChildren: './all-blog/all-blog.module#AllBlogModule'
},
{
  path: 'blogdetails/:id',
  loadChildren: './blogdetails/blogdetails.module#BlogdetailsModule'
},
{
  path: 'approvedauthors',
  loadChildren: './approved-authors/approved-authors.module#ApprovedAuthorsModule'
},
{
  path: 'pendingauthors',
  loadChildren: './pending-authors/pending-authors.module#PendingAuthorsModule'
},
{
  path: 'allauthors',
  loadChildren: './all-authors/all-authors.module#AllAuthorsModule'
},
{
  path: 'authordetails/:id',
  loadChildren: './authordetails/authordetails.module#AuthordetailsModule'
},
{
  path: 'pendingauthordetail/:id',
  loadChildren: './pending-author-detail/pending-author-detail.module#PendingAuthorDetailModule'
},
{
  path: 'authorsblog',
  loadChildren: './author-blog/author-blog.module#AuthorBlogModule'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
