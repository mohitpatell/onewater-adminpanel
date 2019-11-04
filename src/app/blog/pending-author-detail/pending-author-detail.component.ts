import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorOperationService } from '../services/authorOperation.service';


@Component({
  selector: 'app-pending-author-detail',
  templateUrl: './pending-author-detail.component.html',
  styleUrls: ['./pending-author-detail.component.scss']
})
export class PendingAuthorDetailComponent implements OnInit {

  public author;
  constructor(public route: ActivatedRoute, public authorservice: AuthorOperationService) { }

  ngOnInit() {
    this.route.params.subscribe(result=> {
      console.log(result);
      this.authorservice.getSingleNotApprovedAuthor(result.id)
      .subscribe(result=>{
        console.log(result);
        this.author=result.result[0];
      })
    })
  }
  approve(mainid, blogid){
    this.authorservice.approveAuthor(mainid, blogid);
  }

  reject(mainid, blogid){
    this.authorservice.rejectAuthor(mainid, blogid);
  }

}
