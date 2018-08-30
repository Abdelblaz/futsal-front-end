import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPlaceComponent } from './registration-place.component';

describe('RegistrationPlaceComponent', () => {
  let component: RegistrationPlaceComponent;
  let fixture: ComponentFixture<RegistrationPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
