import { Component, OnInit } from '@angular/core';
import {Admin} from "./admin";
import {LoginService} from './login.service';
import {HttpClient} from '@angular/common/http';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})

export class LoginAdminComponent implements OnInit {
	

	public gebruikersnaam: string = ''
	public wachtwoord: string;

	constructor(private httpclient: HttpClient, private loginservice: LoginService, private router: Router){}

  	ngOnInit() {
 	}
  	admin: object;

  	onKey(event: any) {
  		this.gebruikersnaam = event.target.value;
  	}

  	onKeyww(event: any) {
  		this.wachtwoord = event.target.value;
  	}

  	onClick(event: any){
  		this.admin = new Admin(this.gebruikersnaam,this.wachtwoord);
  		console.log(this.admin);
  		this.Inloggen(this.admin);
  	}

  	Inloggen(admin){
  			console.log(admin);
  			this.loginservice.inlogMethodeAdmin(admin).subscribe((response) => {
			console.log(response);
			var message = JSON.stringify(response);
			console.log(message)
			var cutstring = message.substring(12,19) 			// dit is zeker niet hoe het hoort, maar het werkt 
			console.log(cutstring)
			console.log(admin);

			if (cutstring == "Success"){
				this.router.navigate(['DashAdmin'])
			}
			});
			
  	};
}
