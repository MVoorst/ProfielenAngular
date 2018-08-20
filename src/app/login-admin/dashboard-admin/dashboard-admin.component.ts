import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RouterModule, Router} from '@angular/router';


@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

	private gebruikersnaam: string = ''
	private emailadres: string = ''
	user: object;



  constructor(private router: Router) { }


  ngOnInit() {
  }

  	
  	onClick(event: any){
  		this.router.navigate(['CreeerStudent'])	
 			}
	};