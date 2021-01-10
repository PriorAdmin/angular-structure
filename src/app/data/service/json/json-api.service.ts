import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {MenuModel} from '../../model/home/menu';
import data from '@data/json/data.json';
@Injectable({
  providedIn: 'root',
})
export class JsonApiService {
  getMenuList(): Observable<MenuModel[]> {
    return of(data.menuList);
  }
}
