import { Injectable } from '@angular/core';
import { IPlace } from '../domain/iplace';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  URL = 'http://localhost:8080/places/';

  constructor(private _Http: HttpClient) { }



  getPlaces(): Observable<IPlace[]> {
    return this._Http.get<IPlace[]>(this.URL);
  }

  getPlace(id: string): Observable<IPlace> {
   return this._Http.get<IPlace>(this.URL + id);
 }

  getPlaceByName(name: string): Observable<IPlace> {
    console.log ('Appel du REST : ' + this.URL + name);
    return this._Http.get<IPlace>(this.URL + name);
  }
}
