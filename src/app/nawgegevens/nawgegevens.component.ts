import { Component, OnInit } from '@angular/core';
import { User} from "../user";
import { NawgegevensService} from "./nawgegevens.service";
import { HttpClient} from '@angular/common/http';
import { RouterModule, Router} from '@angular/router';
import { LoginUserComponent } from '../login-user/login-user.component';

@Component({
  selector: 'app-nawgegevens',
  templateUrl: './nawgegevens.component.html',
  styleUrls: ['./nawgegevens.component.css']
})
export class NAWGegevensComponent implements OnInit {

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
  public githubadres: string;


  constructor(private nawgegevensservice: NawgegevensService, private router: Router) { }

  ngOnInit() {
  }

  

  	onKey(event: any) {
  	this.postcode = event.target.value;
  		}

  	onClick(event: any){
  		console.log(this.postcode);
  		LoginUserComponent.user = (LoginUserComponent.user.gebruikersnaam, this.postcode);
  		this.Opslaan(this.user)
   		}

   	Opslaan(user){
   		console.log(this.user);
   		// this.nawgegevensservice.opslaanNAW(user).subscribe((response) => {
   		// 	console.log(response)

   		this.router.navigate(['Vraag'])	
 			}
	};
