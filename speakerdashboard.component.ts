import { Component, OnInit } from '@angular/core';
import { Speakerdashboard } from '../speakerdashboard';

@Component({
  selector: 'app-speakerdashboard',
  templateUrl: './speakerdashboard.component.html',
  styleUrls: ['./speakerdashboard.component.css']
})
export class SpeakerdashboardComponent implements OnInit {
  speaker:Speakerdashboard;

  constructor() { 
    this.speaker = localStorage.getItem('speaker')? JSON.parse(localStorage.getItem('speaker')):[];
  }

  ngOnInit(): void {
  }

}
