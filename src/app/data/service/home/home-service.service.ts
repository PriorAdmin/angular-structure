import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {JsonApiService} from '../json/json-api.service';
import {MenuModel} from '../../model/home/menu';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json;charset=UTF-8',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class HomeServiceService {
  constructor(
    private jsonApiService: JsonApiService,
    private http: HttpClient,
  ) {}

  public menuInquire(): Observable<MenuModel[]> {
    return this.jsonApiService.getMenuList();
  }

  public inquireRegion(): Observable<any> {
    const url = 'https://5d104bdfbebb9800143d14fd.mockapi.io/region';
    return this.http
      .get(url, httpOptions)
      .pipe(tap((_) => console.log('inquireRegion success')));
  }
}
