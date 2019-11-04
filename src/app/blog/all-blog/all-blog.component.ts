import { Component, OnInit } from '@angular/core';
import { BlogOperationService } from '../services/blogOperation.service';
import { AuthorOperationService } from '../services/authorOperation.service';

@Component({
  selector: 'app-all-blog',
  templateUrl: './all-blog.component.html',
  styleUrls: ['./all-blog.component.scss']
})
export class AllBlogComponent implements OnInit {

  public allblogs;
  author;
  constructor(public blogservice:BlogOperationService, public authorservice:AuthorOperationService) { }

  ngOnInit() {
      this.blogservice.getAllBlogs()
      .subscribe(result=>{
        console.log(result);
        this.allblogs=result.result;
      })
  }



}
