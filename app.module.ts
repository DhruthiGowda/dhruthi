import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeakerAddComponent } from './speakercrud/speaker-add/speaker-add.component';

import { SpeakerDeleteComponent } from './speakercrud/speaker-delete/speaker-delete.component';
import { SpeakerEditComponent } from './speakercrud/speaker-edit/speaker-edit.component';
import { SpeakerSearchbyIDComponent } from './speakercrud/speaker-searchby-id/speaker-searchby-id.component';
import { ApicallService } from './apicall.service';


@NgModule({
  declarations: [
    AppComponent,
    SpeakerAddComponent,
    SpeakerDeleteComponent,
    SpeakerEditComponent,
    SpeakerSearchbyIDComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ApicallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
