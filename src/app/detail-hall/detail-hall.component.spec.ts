import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHallComponent } from './detail-hall.component';

describe('DetailHallComponent', () => {
  let component: DetailHallComponent;
  let fixture: ComponentFixture<DetailHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
