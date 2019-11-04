import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-company-jobs',
  templateUrl: './single-company-jobs.component.html',
  styleUrls: ['./single-company-jobs.component.scss']
})
export class SingleCompanyJobsComponent implements OnInit {

  jobs=[{
    position:'Web Designer',
    img:'assets/images/avatar/1.jpg',
    postdate:'14/09/2019',

    postedby:'Zeit Labs',
    deadline:'24/10/2019',
    vacancies:14
  },
  {
    position:'Web Designer',
    img:'assets/images/avatar/1.jpg',
    postdate:'14/09/2019',
    postedby:'Zeit Labs',
    deadline:'24/10/2019',
    vacancies:14
  },
  {
    position:'Web Designer',
    img:'assets/images/avatar/1.jpg',
    postedby:'Zeit Labs',
    postdate:'14/09/2019',

    deadline:'24/10/2019',
    vacancies:14
  },
  {
    position:'Web Designer',
    img:'assets/images/avatar/1.jpg',
    postedby:'Zeit Labs',
    postdate:'14/09/2019',
    deadline:'24/10/2019',
    vacancies:14
  },
  {
    position:'Web Designer',
    img:'assets/images/avatar/1.jpg',
    postedby:'Zeit Labs',
    deadline:'24/10/2019',  
      postdate:'14/09/2019',
    vacancies:14
  },]
  constructor() { }

  ngOnInit() {
  }

}
