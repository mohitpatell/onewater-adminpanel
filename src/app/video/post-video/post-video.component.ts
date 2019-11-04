import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { CommonService } from '../service/common.service';
@Component({
  selector: 'app-post-video',
  templateUrl: './post-video.component.html',
  styleUrls: ['./post-video.component.scss']
})
export class PostVideoComponent implements OnInit {

  form:FormGroup;
  constructor(public common: CommonService) { }

  ngOnInit() {
    this.form= new FormGroup({
      title:new FormControl(null, {validators:[Validators.required]}),
      video_link:new FormControl(null, {validators:[Validators.required]}),
      desc:new FormControl(null, {validators:[Validators.required, Validators.maxLength(500)]}),
    })
  }

  addVideo(){
    console.log(this.form);
    if(this.form.invalid){
      return;
    }
    console.log(this.form.value);
    this.common.addvideo(this.form.value);
  }

}
