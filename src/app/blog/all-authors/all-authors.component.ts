import { Component, OnInit } from '@angular/core';
import { AuthorOperationService } from '../services/authorOperation.service';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.scss']
})
export class AllAuthorsComponent implements OnInit {
  public allauthors;
  constructor(public common: AuthorOperationService) { }

  ngOnInit() {
    this.common.getAllAuthor()
    .subscribe(result=> {
      this.allauthors= result.result;
      console.log(this.allauthors);
    })
  }


  approve(mainid, blogid){
    console.log(mainid,blogid)
    // this.common.approveAuthor(mainid, blogid);
  }

  reject(mainid, blogid){
    console.log(mainid,blogid)
    // this.common.rejectAuthor(mainid, blogid);
  }

}
