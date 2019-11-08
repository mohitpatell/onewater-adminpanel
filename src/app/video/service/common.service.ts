import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class CommonService{
  constructor(public http: HttpClient){}

  addvideo(values){
    const data={
      title:values.title,
      video_link:values.video_link,
      desc:values.desc
    }
    this.http.post<{status:any,msg:any,payload:any}>("https://onewater-video-api.herokuapp.com/postvideo",data)
    .subscribe(result=> {
      console.log(result);
    })
  }

  getvideos(){
    return this.http.get<{status:any,msg:any,result:any}>("https://onewater-video-api.herokuapp.com/videos");

  }

  getsinglevideos(id){
    return this.http.get<{status:any,msg:any,result:any}>("https://onewater-video-api.herokuapp.com/video/"+id);
  }

  getLikes(videoid){
    return this.http.get<{items:any}>(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoid}&key=AIzaSyDAmRDLp2OJIZ8EqXblfX0glUZyEN6iG_U`);
  }

  updatelikes(values){
      this.http.patch('https://onewater-video-api.herokuapp.com/likesandviews',values)
      .subscribe(result=>{
        console.log(result);
      })
  }
}
