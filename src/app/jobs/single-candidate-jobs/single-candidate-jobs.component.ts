import { Component, OnInit } from '@angular/core';
import { GetOperationsService } from '../services/getOperations.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-candidate-jobs',
  templateUrl: './single-candidate-jobs.component.html',
  styleUrls: ['./single-candidate-jobs.component.scss']
})
export class SingleCandidateJobsComponent implements OnInit {

  jobs;

  constructor(public service:GetOperationsService, public routes:ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe(result=>{
      console.log(result,'mohit aptel')
      this.service.getCandidatesAppliedJobs(result.id)
      .subscribe(result=>{
        console.log(result);
        this.jobs=result.result;
        console.log('hitttt', this.jobs);

      })

    })
  }

}
