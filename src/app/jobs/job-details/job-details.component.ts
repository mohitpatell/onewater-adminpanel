import { Component, OnInit } from '@angular/core';
import { GetOperationsService } from '../services/getOperations.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  constructor(public service:GetOperationsService, public routes:ActivatedRoute) { }
public job;
  ngOnInit() {
    this.routes.params.subscribe(result=>{
      this.service.getJobDetail(result.id)
      .subscribe(result=>{
        console.log(result);
        this.job=result.result;
        console.log('hitttt', this.job);

      })

    })
  }

}
