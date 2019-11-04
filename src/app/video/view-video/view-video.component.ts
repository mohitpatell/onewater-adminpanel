import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../service/common.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.scss']
})
export class ViewVideoComponent implements OnInit {

  public video;
  safeSrc: SafeResourceUrl;
  constructor(public route: ActivatedRoute, public common:CommonService, private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.route.params.subscribe(result=> {
      console.log(result);
      this.common.getsinglevideos(result.id)
      .subscribe(result=> {
        console.log(result);
        this.video=result.result;
        this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.video.video_link);
        console.log(this.video)
      })
    })
  }

}
