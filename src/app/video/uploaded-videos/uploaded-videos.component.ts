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
    })
  }

}
