import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class BlogOperationService {
  constructor(public http: HttpClient){}

  getNotApprovedBlogs(){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewater-blog-api.herokuapp.com/notblogs');
  }

  getApprovedBlogs(){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewater-blog-api.herokuapp.com/approveblogs');
  }

  getAllBlogs(){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewater-blog-api.herokuapp.com/allblogs');
  }

  getParticularNotBlogs(blogid){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewater-blog-api.herokuapp.com/singlenotappblog/'+blogid);
  }

  getParticularAllBlogs(blogid){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewater-blog-api.herokuapp.com/allblogs/'+blogid);
  }

  getParticularApproveBlogs(blogid){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewater-blog-api.herokuapp.com/singleappblog/'+blogid);
  }

  approve(blogid,mainid){
    const id={
      mainid:mainid,
      id:blogid
    }
      this.http.post<{status:any,msg:any,result:any}>('https://onewater-blog-api.herokuapp.com/approve-blog',id)
      .subscribe(result=> {
        console.log(result)
        alert(result.msg)
      })
  }

  reject(blogid,mainid){
    const id={
      mainid:mainid,
      id:blogid
    }
      this.http.post<{status:any,msg:any,result:any}>('https://onewater-blog-api.herokuapp.com/reject-blog',id)
      .subscribe(result=> {
        console.log(result)
      })
  }
}
