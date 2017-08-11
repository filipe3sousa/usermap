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

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
