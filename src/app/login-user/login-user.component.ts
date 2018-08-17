import { Component, OnInit } from '@angular/core';
import {Admin} from "../admin";
import {LoginUserService} from './login-user.service';
import {HttpClient} from '@angular/common/http';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})

export class LoginUserComponent implements OnInit {
	

	public gebruikersnaam: string = ''
	public wachtwoord: string;

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
  		this.user = new Admin(this.gebruikersnaam,this.wachtwoord);
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
