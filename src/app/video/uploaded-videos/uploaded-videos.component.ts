import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-uploaded-videos',
  templateUrl: './uploaded-videos.component.html',
  styleUrls: ['./uploaded-videos.component.scss']
})
export class UploadedVideosComponent implements OnInit {

  public videos;
  constructor(public common: CommonService) { }

  ngOnInit() {
    this.common.getvideos()
    .subscribe(result=> {
      console.log(result);
      this.videos=result.result;
      for(let i=0; i<this.videos.length; i++)
      {
        let image=this.getId(this.videos[i].video_link);
        this.videos[i].image=`https://img.youtube.com/vi/${image}/0.jpg`;
      }
    })
  }

  getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
  }
}
