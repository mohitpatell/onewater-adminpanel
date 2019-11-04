import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class AuthorOperationService {
  constructor(public http: HttpClient){}

  getNotApprovedAuthor(){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewater-blog-api.herokuapp.com/notauthor');
  }

  getSingleNotApprovedAuthor(id){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewater-blog-api.herokuapp.com/notauthor/'+id);
  }

  getSingleApprovedAuthor(id){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewater-blog-api.herokuapp.com/approvedauthor/'+id);
  }

  getAllAuthor(){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewater-blog-api.herokuapp.com/allauthor');
  }

  getSingleAllAuthor(id){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewater-blog-api.herokuapp.com/allauthor/'+id);
  }

  getApprovedAuthor(){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewater-blog-api.herokuapp.com/approvedauthor');
  }

  approveAuthor(mainid,blogid){
    const id={
      mainid:mainid,
      id:blogid
    }
    this.http.post<{status:any,msg:any,result:any}>('https://onewater-blog-api.herokuapp.com/approve-author',id)
    .subscribe(result =>{
      console.log(result.msg);
      console.log(result);
    })
  }

  rejectAuthor(mainid,blogid){
    const id={
      mainid:mainid,
      id:blogid
    }
    this.http.post<{status:any,msg:any,result:any}>('https://onewater-blog-api.herokuapp.com/reject-author',id)
    .subscribe(result =>{
      console.log(result.msg);
      console.log(result);
    })
  }
}
