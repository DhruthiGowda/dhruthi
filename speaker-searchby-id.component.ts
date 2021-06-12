import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/apicall.service';
import { Speaker } from 'src/app/speaker';

@Component({
  selector: 'app-speaker-searchby-id',
  templateUrl: './speaker-searchby-id.component.html',
  styleUrls: ['./speaker-searchby-id.component.css']
})
export class SpeakerSearchbyIDComponent implements OnInit {

  speakeremailid:string="";
  speakername:string="";
  password:string="";
  contactnumber:string="";
  skills:string="";

  constructor(private apicallservice:ApicallService) { }

  ngOnInit(): void {
  }

  search(event:any)
  {

this.speakeremailid=event.speakerid;
alert(this.speakeremailid);
var speaker:Speaker=new Speaker();

this.apicallservice.getbyid(this.speakeremailid).subscribe(data => {
  speaker = data;
  console.log(speaker.speakeremailid);
  console.log(speaker.speakername);
  this.speakeremailid=speaker.speakeremailid;
  this.speakername=speaker.speakername;
  
  // console.log(this.supplierdata);
});

  }

}
