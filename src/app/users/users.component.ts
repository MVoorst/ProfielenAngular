import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 yoyo : string = this.userService.roepOmerOp();
  user : User = new User( );

  users : User[];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users)
  }
}