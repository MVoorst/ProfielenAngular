import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RouterModule, Router} from '@angular/router';
import { User } from '../../../user';
import { CreeerStudentService } from './creeer-student.service'


@Component({
  selector: 'app-creeer-student',
  templateUrl: './creeer-student.component.html',
  styleUrls: ['./creeer-student.component.css']
})
export class CreeerStudentComponent implements OnInit {

	public id: number;
	public gebruikersnaam: string = ''
	public emailadres: string;
	gebruiker : User;

  constructor(private httpclient: HttpClient, private creeerstudentservice: CreeerStudentService, private router: Router) { }

  ngOnInit() {
  }

admin: object;

  	onKey(event: any) {
  		this.gebruikersnaam = event.target.value;
  	}

  	onKeyemail(event: any) {
  		this.emailadres = event.target.value;
  	}

  	onClick(event: any){
		this.gebruiker = new User();
		this.gebruiker.gebruikersnaam = this.gebruikersnaam;
		this.gebruiker.emailadres = this.emailadres;
		console.log(this.gebruiker.emailadres);
		this.Aanmaken(this.gebruiker);
		}

		Aanmaken (user) {
			console.log(this.gebruiker.emailadres);
			this.creeerstudentservice.maakDeelnemerAan(user).subscribe(
					(response) => {
   						console.log(response);
   					})
		   }
		}