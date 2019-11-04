import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadedVideosComponent } from './uploaded-videos.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: UploadedVideosComponent
    }
]

@NgModule({
declarations: [UploadedVideosComponent],
exports:[UploadedVideosComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UploadedVideosModule { }
