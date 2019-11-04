import { Component, OnInit } from '@angular/core';
import { AuthorOperationService } from '../services/authorOperation.service';

@Component({
  selector: 'app-pending-authors',
  templateUrl: './pending-authors.component.html',
  styleUrls: ['./pending-authors.component.scss']
})
export class PendingAuthorsComponent implements OnInit {

  public allauthors;

  constructor(public common:AuthorOperationService) { }

  ngOnInit() {
    this.common.getNotApprovedAuthor()
    .subscribe(result=> {
      this.allauthors= result.result;
      console.log(this.allauthors);
    })
  }

  approve(mainid, blogid){
    this.common.approveAuthor(mainid, blogid);
  }

  reject(mainid, blogid){
    this.common.rejectAuthor(mainid, blogid);
  }

}
