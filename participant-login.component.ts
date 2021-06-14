import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ParticipantService } from './participant.service';
ParticipantService

@Component({
  selector: 'app-participant-login',
  templateUrl: './participant-login.component.html',
  styleUrls: ['./participant-login.component.css']
})
export class ParticipantLoginComponent implements OnInit {

  constructor(private http : HttpClient,private participantService:ParticipantService,private router: Router) { }
  model:any=[];
  ngOnInit(): void {
    
  }
  // enter(){
  //   this.router.navigate(['/Participantdashboard']);
  // }
data:any;
  ValidateRegistration(event:any)
  {
    var ad=new Participant();
    ad.P_email=event.email;
    ad.P_password=event.pwd;
    

    this.fetchdata(ad);
    
    // console.log(reg.GetEmail);
    
    }
    fetchdata(reg:Participant){
      let Observable=this.participantService.getauth(reg);
      Observable.subscribe((data)=>{
        this.data=data;
        console.log(this.data);
        if(this.data){
          this.router.navigate(['/Participantdashboard']);
         }
         else{
           alert("error password invalid")
         }
      })
  
  }
}
export class Participant{
  P_email:string="";
  P_password:string="";
}



