import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'registered',
    loadChildren: './registered-users/registered-users.module#RegisteredUsersModule'
  },
  {
    path: 'pending',
    loadChildren: './pending-users/pending-users.module#PendingUsersModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
