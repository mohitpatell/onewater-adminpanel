import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PendingUsersComponent } from './pending-users.component';

const routes: Route[]=[
    {
    path: '',
    component: PendingUsersComponent
    }
]

@NgModule({
declarations: [PendingUsersComponent],
exports:[PendingUsersComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PendingUsersModule { }
