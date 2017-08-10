import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    private userService: UserService
  ) {}

  users: any[];

  getUsers(): void {
    this.userService.getUsers().subscribe( res => {
      this.users = res
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
