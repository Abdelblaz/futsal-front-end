import { Component, OnInit } from '@angular/core';
import { IHall } from '../domain/ihall';
import { HallService } from '../services/hall.service';
import { Subscription } from '../../../node_modules/rxjs';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { IPlace } from '../domain/iplace';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-detail-place',
  templateUrl: './detail-place.component.html',
  styleUrls: ['./detail-place.component.css']
})
export class DetailPlaceComponent implements OnInit {

  listHall: IHall[];
  code: string;
  Place: IPlace = {  id: 0, city: '', hOpen: 0,  hClose: 0, listHall: [],
                    locality: '', name: '', nStreet: 0, postcode: 0, shower: false, street: ''
                  };
  nomPlace: string;

  constructor(private _service: HallService, private _service2: PlaceService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route. queryParams.subscribe(res => this.nomPlace = res.nomplace);
    this._route
    .paramMap
    .subscribe(
      res => {
             this.code = res.get('id');
             this._service2.getPlace(this.code).subscribe(
               res3 => {
                      this.Place = res3;
                     }
              );

             this._service.getHall(this.code).subscribe(
                res2 => {
                          this.listHall = res2;
                        }
             );
       }
    );
  }
}
