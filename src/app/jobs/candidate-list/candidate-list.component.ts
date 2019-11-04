import { Component, OnInit } from '@angular/core';
import { GetOperationsService } from '../services/getOperations.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {


  public candidates;
  constructor(public service:GetOperationsService) { }

  ngOnInit() {
    this.service.getCandidates()
    .subscribe(result=> {
      console.log(result);
      this.candidates=result.result;
    })
  }

}
