import { Component, OnInit } from '@angular/core';
import { IPlace } from '../domain/iplace';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

listPlace: IPlace[];

  constructor(private _service: PlaceService) { }

  ngOnInit() {
    this._service.getPlaces().subscribe(
      resp => this.listPlace = resp,
      erreur => console.log('ATTENTION Il y a l\'erreur : ' + erreur));
  }

}
