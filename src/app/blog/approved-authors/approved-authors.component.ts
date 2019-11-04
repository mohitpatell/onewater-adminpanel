import { Component, OnInit } from '@angular/core';
import { AuthorOperationService } from '../services/authorOperation.service';

@Component({
  selector: 'app-approved-authors',
  templateUrl: './approved-authors.component.html',
  styleUrls: ['./approved-authors.component.scss']
})
export class ApprovedAuthorsComponent implements OnInit {

  public allauthors;

  constructor(public common:AuthorOperationService) { }

  ngOnInit() {
    this.common.getApprovedAuthor()
    .subscribe(result=> {
      this.allauthors= result.result;
      console.log(this.allauthors);
    })
  }

}
