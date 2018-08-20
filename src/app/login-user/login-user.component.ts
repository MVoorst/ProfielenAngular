import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {LoginUserService} from './login-user.service';
import {HttpClient} from '@angular/common/http';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})

export class LoginUserComponent implements OnInit {
	

	public gebruikersnaam: string;
	public wachtwoord: string;
  public emailadress: string;
  public voornaam: string;
  public tussenvoegsel: string;
  public achternaam: string;
  public geslacht: boolean;
  public geboortedatum: string;
  public huisnummer: string;
  public straat: string;
  public postcode: string;
  public woonplaats: string;
  public linkedinadres: string;
  public githubadres: string

	constructor(private httpclient: HttpClient, private loginuserservice: LoginUserService, private router: Router){}

  	ngOnInit() {
 	}

  	user: object;

  	onKey(event: any) {
  		this.gebruikersnaam = event.target.value;
  	}

  	onKeyww(event: any) {
  		this.wachtwoord = event.target.value;
  	}

  	onClick(event: any){
  		this.user = new User(  this.gebruikersnaam,
                             this.wachtwoord, 
                             this.emailadress, 
                             this.voornaam, 
                             this.tussenvoegsel,
                             this.achternaam, 
                             this.geslacht, 
                             this.geboortedatum, 
                             this.huisnummer,
                             this.straat,
                             this.postcode,
                             this.woonplaats,
                             this.linkedinadres,
                             this.githubadres
                             );
  		console.log(this.user);
  		this.Inloggen(this.user);
  	}

  	Inloggen(user){															//USERRRRRR
  			console.log(user);
  			this.loginuserservice.inlogMethode(user).subscribe((response) => {
			console.log(response);
			var message = JSON.stringify(response);
			console.log(message)
			var cutstring = message.substring(12,19) 			// dit is zeker niet hoe het hoort, maar het werkt 
			console.log(cutstring)
			console.log(user);

			if (cutstring == "Success"){
				//this.router.navigate(['DashAdmin'])
			}
			});
			
  	};
}
