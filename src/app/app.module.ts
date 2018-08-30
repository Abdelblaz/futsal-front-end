import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationManagerComponent } from './registration-manager/registration-manager.component';
import {RouterModule, Route} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HallComponent } from './hall/hall.component';
import { RegistrationPlaceComponent } from './registration-place/registration-place.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Route[] = [
  {'path': 'welcom', 'component': WelcomeComponent, pathMatch: 'full'},
  {'path': 'inscription', 'component': RegistrationManagerComponent},
  {'path': 'ajoutsalle', 'component': HallComponent},
  {'path': 'ajoutsociete', 'component': RegistrationPlaceComponent},
  {'path': '', redirectTo: '/welcom', pathMatch: 'full'}

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationManagerComponent,
    WelcomeComponent,
    HallComponent,
    RegistrationPlaceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
