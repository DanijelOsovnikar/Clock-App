import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Qoute } from '../model/quote';
import { Ip } from '../model/ip';
import { WorldTime } from '../model/worldTime';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  constructor(private http: HttpClient) {}

  getQuote(): Observable<Qoute> {
    return this.http.get('https://api.quotable.io/random').pipe(
      map((elem: any) => {
        return new Qoute(elem);
      })
    );
  }

  getIP(): Observable<Ip> {
    return this.http.get('http://ip-api.com/json/').pipe(
      map((data: any) => {
        return new Ip(data);
      })
    );
  }

  getWorldTime(param: any): Observable<WorldTime> {
    return this.http.get(`https://worldtimeapi.org/api/timezone/${param}`).pipe(
      map((data: any) => {
        return new WorldTime(data);
      })
    );
  }
}
