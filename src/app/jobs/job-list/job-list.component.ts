import { Component, OnInit } from '@angular/core';
import { GetOperationsService } from '../services/getOperations.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  jobs;

  constructor(public service:GetOperationsService) { }

  ngOnInit() {
    this.service.getAllJobs()
    .subscribe(result=> {
      console.log(result);
      this.jobs=result.result
    })
  }

}
