import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHall } from '../domain/ihall';
import { Observable } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class HallService {

  URL = 'http://localhost:8080/';

  constructor(private _http: HttpClient) { }


  addHall(hall: IHall): Observable<any> {

    return this._http.post(this.URL, hall);
  }

}
