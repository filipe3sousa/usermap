import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.routes'

import { AppComponent } from './app.component';

import { UserService } from './user.service';

import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { LeafletModule } from '@asymmetrik/angular2-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    HomeComponent,
    LeafletMapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    LeafletModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
