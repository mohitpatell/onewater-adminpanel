import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewVideoComponent } from './view-video.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: ViewVideoComponent
    }
]

@NgModule({
declarations: [ViewVideoComponent],
exports:[ViewVideoComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ViewVideoModule { }
