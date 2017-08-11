import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  loading: boolean = true;
  users: any[];
  mapItems: Object[] = [];
  subscription: Subscription;
  query = new FormControl();


  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.subscription = this.query.valueChanges
      .do(() => this.loading = true)
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(query => this.userService.searchUser(query))
      .subscribe(res =>  {
        this.users = res;
        this.loading = false;
        this.users.forEach(user => this.mapItems.push({
          id: user.id,
          name: user.name,
          coords: user.address.geo
        }));
    });

    //Trigger the FormControl valueChanges
    this.query.setValue('');

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
