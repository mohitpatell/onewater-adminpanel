import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-job-candidates',
  templateUrl: './single-job-candidates.component.html',
  styleUrls: ['./single-job-candidates.component.scss']
})
export class SingleJobCandidatesComponent implements OnInit {

  candidates=[
    {
      name:'Mandeep Baghel',
      address:'Indore , India',
      currentPos:'Web Designer',
      img:'assets/images/avatar/1.jpg'
    },
    {
      name:'Mandeep Baghel',
      address:'Indore , India',
      currentPos:'Web Designer',
      img:'assets/images/avatar/1.jpg'
    },
    {
      name:'Mandeep Baghel',
      address:'Indore , India',
      currentPos:'Web Designer',
      img:'assets/images/avatar/1.jpg'
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
