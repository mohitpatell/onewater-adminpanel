import { Component, OnInit } from '@angular/core';
import { GetOperationsService } from '../services/getOperations.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies;
  constructor(public service:GetOperationsService) { }

  ngOnInit() {
    this.service.getCompanies()
    .subscribe(result=>{
      console.log(result);
      this.companies=result.result;
    })
  }

}
