import { Component, OnInit } from '@angular/core';
import { GetOperationsService } from '../services/getOperations.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss']
})
export class CandidateDetailsComponent implements OnInit {

  constructor(public service:GetOperationsService, public routes:ActivatedRoute) { }

  public candidate;
  ngOnInit() {
    this.routes.params.subscribe(result=>{
      console.log(result,'mohit aptel')
      this.service.getSingleCandidates(result.id)
      .subscribe(result=>{
        console.log(result);
        this.candidate=result.result;
        console.log('hitttt', this.candidate);

      })

    })
  }

}
