import { Component, OnInit } from '@angular/core';
import { IHall } from '../domain/ihall';
import { HallService } from '../services/hall.service';
import { Router } from '../../../node_modules/@angular/router';
import { IPlace } from '../domain/iplace';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-registration-place',
  templateUrl: './registration-place.component.html',
  styleUrls: ['./registration-place.component.css']
})
export class RegistrationPlaceComponent implements OnInit {


  hall: IPlace;

  constructor(private _service: PlaceService, private _router: Router) { }

  ngOnInit() {
  }


}
