import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostVideoComponent } from './post-video.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
    {
    path: '',
    component: PostVideoComponent
    }
]

@NgModule({
declarations: [PostVideoComponent],
exports:[PostVideoComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class PostVideoModule { }
