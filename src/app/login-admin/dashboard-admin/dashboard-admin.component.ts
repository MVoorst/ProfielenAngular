import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

import {HttpClient} from '@angular/common/http';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  users : User[] = [];
	private gebruikersnaam: string = ''
	private emailadres: string = ''
	user: object;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users=>this.users = users.slice(1, 5));
  }
  onKeyUsername(event:any) {
  	this.gebruikersnaam = event.target.value;
  }

  onKeyEmail(event:any) {
  	this.emailadres = event.target.value;

  }


  NewUser(user){


  }

  	onClick(event: any){
  		this.router.navigate(['CreeerStudent'])	
 		}
};
  

