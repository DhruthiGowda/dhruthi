import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApicallService } from 'src/app/apicall.service';
import { Speaker } from 'src/app/speaker';

@Component({
  selector: 'app-speaker-edit',
  templateUrl: './speaker-edit.component.html',
  styleUrls: ['./speaker-edit.component.css']
})
export class SpeakerEditComponent implements OnInit {

  speakeremailid:string="";
  speakername:string="";
  password:string="";
  contactnumber:string="";
  skills:string="";

  constructor(private apicallservice:ApicallService) { }

  ngOnInit(): void {
  }
  edit(speakerid:any)
  {
    
    //this.suppID=event.suppID;
    var speaker:Speaker=new Speaker();

    this.apicallservice.getbyid(this.speakeremailid).subscribe(data => {
      speaker = data;
      console.log(speaker.contactnumber);
      console.log(speaker.speakername);
      this.speakername=speaker.speakername;
      this.contactnumber=speaker.contactnumber;
      
      // console.log(this.supplierdata);
    });
  }

  savechanges(data:any)
{
  var speaker=new Speaker();
  speaker.speakeremailid=data.speakerid;
  speaker.password=data.pwd;
  speaker.speakername=data.speakername;
  speaker.skills=data.speakerskills; 
  speaker.contactnumber=data.contactnum;
alert(speaker.speakeremailid);
alert(speaker.password);
alert(speaker.speakername);

this.apicallservice.putSpeakerData(speaker.speakeremailid,speaker);
}

}



