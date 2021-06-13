import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerdashboardComponent } from './speakerdashboard.component';

describe('SpeakerdashboardComponent', () => {
  let component: SpeakerdashboardComponent;
  let fixture: ComponentFixture<SpeakerdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
