import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class GetOperationsService {

  constructor(public http:HttpClient){}

  getCompanies(){
    return this.http.get<{status:string, msg:string, result:any}>('https://onewater-job-api.herokuapp.com/getcompanies');
  }

  getCompanyDetail(company_id){
    return this.http.get<{status:string, msg:string, result:any}>('https://onewater-job-api.herokuapp.com/singlecompany/'+company_id);
  }

  getAllJobs(){
    return this.http.get<{status:string, msg:string, result:any}>('https://onewater-job-api.herokuapp.com/getjobs');
  }

  getJobsByCompany(company_id){
    return this.http.get<{status:string, msg:string, result:any}>('https://onewater-job-api.herokuapp.com/company_posted_jobs/'+company_id);
  }

  getJobDetail(job_id){
    return this.http.get<{status:string, msg:string, result:any}>('https://onewater-job-api.herokuapp.com/singlejob/'+job_id);
  }

  getCandidates(){
    return this.http.get<{status:string, msg:string, result:any}>('https://onewater-job-api.herokuapp.com/candidates');
  }

  getSingleCandidates(id){
    return this.http.get<{status:string, msg:string, result:any}>('https://onewater-job-api.herokuapp.com/candidate/'+id);
  }

  getCandidatesAppliedJobs(id){
    return this.http.get<{status:string, msg:string, result:any}>('https://onewater-job-api.herokuapp.com/candidate-applied-jobs/'+id);
  }
}
