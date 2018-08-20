import { Component, OnInit } from '@angular/core';
import { User} from "../user";
import { HttpClient} from '@angular/common/http';
import { RouterModule, Router} from '@angular/router';
//import { LoginUserComponent } from './login-user.component';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-nawgegevens',
  templateUrl: './nawgegevens.component.html',
  styleUrls: ['./nawgegevens.component.css']
})
export class NAWGegevensComponent implements OnInit {

	public gebruikersnaam: string = this.globalservice.gebruiker.gebruikersnaam;
  public wachtwoord: string = this.globalservice.gebruiker.wachtwoord;

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
  public githubadres: string;

  constructor(private globalservice: GlobalService) { }


  ngOnInit() {
  }

  	 user: object;

  onKey(event: any) {
  	this.postcode = event.target.value;
  		}

  onClick(event: any){
    console.log(this.gebruikersnaam);
    console.log(this.postcode);
  	this.globalservice.gebruiker.postcode = this.postcode;
  	console.log(this.globalservice.gebruiker.postcode);
   		}


   	Opslaan(user){
   		//console.log(this.user);
   		// this.nawgegevensservice.opslaanNAW(user).subscribe((response) => {
   		// 	console.log(response)

   		//this.router.navigate(['Vraag'])	
 			}
	};