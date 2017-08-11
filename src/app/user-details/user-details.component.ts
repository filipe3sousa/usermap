import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

import { UserService } from '../user.service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  user: any;
  subscription: Subscription;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
      .subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }

  getWebsiteURL(): string {
    let url: string = '';
    if (!/^http[s]?:\/\//.test(this.user.website)) {
        url += 'http://';
    }

    url += this.user.website;
    return url;
  }

}
