import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Speaker } from './speaker';


@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) { }

  public API = 'https://localhost:44384/api/Speaker/';
  public getAPI='https://localhost:44384/api/';

  public get():Observable<Array<Speaker>>{
    console.log('hello');
   
    return this.http.get<Array<Speaker>>(this.API);
  }

  getbyid(id:string):Observable<Speaker>  {
    
    
    console.log(id);
      //return this.http.get<Supplier>(this.API + '/' + {id});
      return this.http.get<Speaker>(this.getAPI + 'Speaker/' + id);
  }

  postSpeakerData(speaker:Speaker)
  {
    let endPoints="/Speaker"
    this.http.post(this.getAPI + endPoints, speaker).subscribe(data => {
      console.log(data);
    });
    alert("Done");
  }

  putSpeakerData(id:string,speaker:Speaker)
  {
    alert(id);
    alert(speaker.speakeremailid);
    alert(speaker.speakername);
    let endPoints="Speakers/" + id;
    //let endPoints="Suppliers/";
    this.http.put(this.getAPI + endPoints, speaker).subscribe(data => {
      console.log(data);
    });
    alert("Done");

  }

  deleteSpeaker(id:string)
  {
    //alert(this.http.delete(this.API+id));
    // let myParams = new URLSearchParams();
    // myParams.append('id',parseInt(id));
    

   
    return this.http.delete(this.API + id).subscribe(data => {
      console.log(data);
    });

  }
   


}
