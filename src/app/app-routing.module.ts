import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule'
  },
  {
    path: 'video',
    loadChildren: './video/video.module#VideoModule'
  },
  {
  path: 'blog',
  loadChildren: './blog/blog.module#BlogModule'
},
{
  path: 'jobs',
  loadChildren: './jobs/jobs.module#JobsModule'
},
{
path: 'subs',
loadChildren: './user-suscribed/user-suscribed.module#UserSuscribedModule'
},
  {
  path: '**',
  redirectTo:'/login',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
