import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json;charset=UTF-8',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http : HttpClient) { }

  public inquireRegion(): Observable<any> {
    const url = 'https://5d104bdfbebb9800143d14fd.mockapi.io/region';
    return this.http
      .get(url, httpOptions)
      .pipe(tap((_) => console.log('inquireRegion success')));
  }

}
