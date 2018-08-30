import { Injectable } from '@angular/core';
import { IPlace } from '../domain/iplace';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  URL = 'http://localhost:8080/futsal/';

  constructor(private _http: HttpClient) { }

  addHall(place: IPlace): Observable<any> {

    return this._http.post(this.URL, place);
  }
}
