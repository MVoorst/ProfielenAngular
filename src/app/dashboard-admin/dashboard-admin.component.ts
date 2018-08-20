import { Component, OnInit } from '@angular/core';
import {}

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

	private gebruikersnaam: string = ''
	private emailadres: string = ''
	user: object;


  constructor() { }

  ngOnInit() {
  }


  onKeyUsername(event:any) {
  	this.gebruikersnaam = event.target.value;
  }

  onKeyEmail(event:any) {
  	this.emailadres = event.target.value;

  }


  NewUser(user){


  }
}
