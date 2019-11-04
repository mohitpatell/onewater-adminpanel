import { Component, OnInit } from '@angular/core';
import { BlogOperationService } from '../services/blogOperation.service';

@Component({
  selector: 'app-pending-blog',
  templateUrl: './pending-blog.component.html',
  styleUrls: ['./pending-blog.component.scss']
})
export class PendingBlogComponent implements OnInit {

  public allblogs;
  constructor(public blogservice:BlogOperationService) { }

  ngOnInit() {
      this.blogservice.getNotApprovedBlogs()
      .subscribe(result=>{
        console.log(result);
        this.allblogs=result.result;
      })
  }

}
