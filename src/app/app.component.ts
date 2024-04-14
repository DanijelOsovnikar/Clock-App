import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WorldTime } from './model/worldTime';
import { Ip } from './model/ip';
import { Qoute } from './model/quote';
import { ClockService } from './services/clock.service';
import { ClockTimeService } from './services/clock-time.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('1s ease-out', style({ height: 80, opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: 80, opacity: 1 }),
        animate('1s ease-in', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'ClockApp';
  quote: Qoute = new Qoute();
  ip: Ip = new Ip();
  country: string = '';
  city: string = '';
  param = '';
  worldTime: WorldTime = new WorldTime();
  timeOfTheDay: string = '';
  isMore: boolean = false;
  public time: any;
  nightDay: boolean = false;

  constructor(private service: ClockService, private clock: ClockTimeService) {}

  ngOnInit(): void {
    this.getIp();
    this.getQuote();
    this.timeofTheDay();
    this.time = this.clock.getCurrentTime();
  }

  getQuote() {
    this.service.getQuote().subscribe({
      next: (response) => {
        this.quote = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getIp() {
    this.service.getIP().subscribe({
      next: (response) => {
        this.param = response.timezone;
        this.country = response.countryCode;
        this.city = response.city;
        this.getWorldTime();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getWorldTime() {
    this.service.getWorldTime(this.param).subscribe({
      next: (response) => {
        this.worldTime = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  timeofTheDay() {
    let date = new Date();

    if (date.getHours() < 12) {
      this.timeOfTheDay = 'MORNING';
      this.nightDay = false;
    } else if (date.getHours() < 18) {
      this.timeOfTheDay = 'AFTERNOON';
      this.nightDay = false;
    } else {
      this.timeOfTheDay = 'EVENING';
      this.nightDay = true;
    }
  }

  isActive(): void {
    this.isMore = !this.isMore;
    let container = document.querySelector('.container') as HTMLElement;
    container.classList.toggle('heightProp');
    container.classList.toggle('active');
  }
}
