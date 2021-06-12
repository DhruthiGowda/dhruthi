import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApicallService } from 'src/app/apicall.service';
import { Speaker } from 'src/app/speaker';


@Component({
  selector: 'app-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.css']
})
export class SpeakerAddComponent implements OnInit {

  
  speakeremailid:string="";
  password:string="";
  speakername:string="";
  skills:string="";
  contactnumber:string="";
  

  constructor(private apicallservice:ApicallService) { }

  ngOnInit(): void {
  }

  add(event:any)
{
  var speaker:Speaker=new Speaker();
  speaker.speakeremailid=event.speakerid;
  speaker.password=event.pwd;
  speaker.speakername=event.speakername;
  speaker.skills=event.speakerskills;
  speaker.contactnumber=event.contactnum;
  this.apicallservice.postSpeakerData(speaker);

}

}
