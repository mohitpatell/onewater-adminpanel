import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorOperationService } from '../services/authorOperation.service';

@Component({
  selector: 'app-authordetails',
  templateUrl: './authordetails.component.html',
  styleUrls: ['./authordetails.component.scss']
})
export class AuthordetailsComponent implements OnInit {
  public author;
  constructor(public route: ActivatedRoute, public authorservice: AuthorOperationService) { }

  ngOnInit() {
    this.route.params.subscribe(result=> {
      console.log(result,'jkb');
      this.authorservice.getSingleAllAuthor(result.id)
      .subscribe(result=>{
        console.log(result);
        this.author=result.result[0];
      })
    })
  }

}
