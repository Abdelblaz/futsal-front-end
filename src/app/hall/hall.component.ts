import { Component, OnInit } from '@angular/core';
import { HallService } from '../services/hall.service';
import { IHall } from '../domain/ihall';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {

hall: IHall;
listHall: IHall[];

  constructor(private _service: HallService, private _router: Router) { }


  ngOnInit() {
  }
  addHall() {
    this._service.addHall(this.hall).subscribe(res => {console.log('l\'ajout est validé');
                                              this._router.navigate(['/ajoutsociete']);
  });
}


}
