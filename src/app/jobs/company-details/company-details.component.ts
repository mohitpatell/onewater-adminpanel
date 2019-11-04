import { Component, OnInit } from '@angular/core';
import { GetOperationsService } from '../services/getOperations.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  constructor(public service:GetOperationsService, public routes:ActivatedRoute) { }
public company;
  ngOnInit() {
    this.routes.params.subscribe(result=>{
      this.service.getCompanyDetail(result.id)
      .subscribe(result=>{
        console.log(result);
        this.company=result.result;
        console.log('hitttt', this.company);

      })

    })
  }

}
