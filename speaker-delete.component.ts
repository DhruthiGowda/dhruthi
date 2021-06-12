import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/apicall.service';

@Component({
  selector: 'app-speaker-delete',
  templateUrl: './speaker-delete.component.html',
  styleUrls: ['./speaker-delete.component.css']
})
export class SpeakerDeleteComponent implements OnInit {

  speakeremailid:string="";
  constructor(private apicallservice:ApicallService) { }

  ngOnInit(): void {
  }

  btnclick(event:any)
  {
  
    this.speakeremailid=event.speakerid;
this.apicallservice.deleteSpeaker(this.speakeremailid);

  }


}
