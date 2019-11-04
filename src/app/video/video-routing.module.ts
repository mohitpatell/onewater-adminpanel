import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'postvideo',
      loadChildren: './post-video/post-video.module#PostVideoModule'
  },
  {
    path: 'uploadedvideos',
      loadChildren: './uploaded-videos/uploaded-videos.module#UploadedVideosModule'
  },
  {
    path: 'viewvideo/:id',
      loadChildren: './view-video/view-video.module#ViewVideoModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VideoRoutingModule { }
