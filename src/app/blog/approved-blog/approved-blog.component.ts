import { Component, OnInit } from '@angular/core';
import { BlogOperationService } from '../services/blogOperation.service';

@Component({
  selector: 'app-approved-blog',
  templateUrl: './approved-blog.component.html',
  styleUrls: ['./approved-blog.component.scss']
})
export class ApprovedBlogComponent implements OnInit {
  public allblogs;
  constructor(public blogservice:BlogOperationService) { }

  ngOnInit() {
      this.blogservice.getApprovedBlogs()
      .subscribe(result=>{
        console.log(result);
        this.allblogs=result.result;
      })
  }

}
