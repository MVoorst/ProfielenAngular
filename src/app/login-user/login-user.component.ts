import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { RouterModule, Router} from '@angular/router';
import { LoginService } from '../login-admin/login.service';
import { GlobalService } from '../global.service';
import { User } from '../user';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})

export class LoginUserComponent implements OnInit {
  public id: number;
	public gebruikersnaam: string;
	public wachtwoord: string;
  public emailadres: string;
  public voornaam: string;
  public tussenvoegsel: string;
  public achternaam: string;
  public geslacht: boolean;
  public geboortedatum: number;
  public huisnummer: number;
  public straat: string;
  public postcode: string;
  public woonplaats: string;
  public linkedinadres: string;
  public githubadres: string;

	constructor(private httpclient: HttpClient, private loginservice: LoginService, private router: Router, private globalservice: GlobalService){}

  	ngOnInit() {
   }

  	onKey(event: any) {
  		this.emailadres = event.target.value;
  	}

  	onKeyww(event: any) {
  		this.wachtwoord = event.target.value;
  	}

  	onClick(event: any){
  		this.globalservice.gebruiker = new User(
                        this.id,
                        this.gebruikersnaam,
                        this.wachtwoord, 
                        this.emailadres, 
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
  		console.log(this.emailadres);
  		this.Inloggen(this.globalservice.gebruiker);
  	}

  	Inloggen(user){															//USERRRRRR
  		console.log(this.globalservice.gebruiker);
      console.log(user);
  		this.loginservice.inlogMethodeUser(user).subscribe(
        (response : {message: string}) => {
          console.log(response.message);
                if (response.message != "Succes"){
                
                }
			    if (response.message == "Success"){

          this.loginservice.getuserName(this.globalservice.gebruiker.emailadres).subscribe(
            (user : User) => {

              console.log(user)
              this.globalservice.gebruiker.id = user.id;
              this.globalservice.gebruiker.voornaam = user.voornaam;
              this.globalservice.gebruiker.tussenvoegsel = user.tussenvoegsel;
              this.globalservice.gebruiker.achternaam = user.achternaam;
              this.globalservice.gebruiker.geslacht = user.geslacht;
              this.globalservice.gebruiker.geboortedatum = user.geboortedatum;
              this.globalservice.gebruiker.huisnummer = user.huisnummer;
              this.globalservice.gebruiker.straat = user.straat;
              this.globalservice.gebruiker.postcode = user.postcode;
              this.globalservice.gebruiker.woonplaats = user.woonplaats;
              this.globalservice.gebruiker.linkedinadres = user.linkedinadres;
              this.globalservice.gebruiker.githubadres = user.githubadres;

              console.log(this.globalservice.gebruiker.id);
            });
				this.router.navigate(['NAW'])
			} 

			});
			
  	};

    
    
}