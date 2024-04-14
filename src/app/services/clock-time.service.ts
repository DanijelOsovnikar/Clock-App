import { Injectable } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClockTimeService {
  private clock: Observable<Date>;

  constructor() {
    this.clock = interval(1000).pipe(map(() => new Date()));
  }

  getCurrentTime() {
    return this.clock;
  }
}
