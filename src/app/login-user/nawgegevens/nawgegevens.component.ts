import { Component, OnInit } from '@angular/core';
import { User} from "../../user";
import { HttpClient} from '@angular/common/http';
import { RouterModule, Router} from '@angular/router';
import { NawgegevensService } from './nawgegevens.service';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-nawgegevens',
  templateUrl: './nawgegevens.component.html',
  styleUrls: ['./nawgegevens.component.css']
})


export class NAWGegevensComponent implements OnInit {
  public id: number;
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

  constructor(private globalservice: GlobalService, private nawgegevensservice: NawgegevensService) { }


  ngOnInit() {
  }

  	 user: object;

  onKey(event: any) {
  	this.postcode = event.target.value;
  }

  onClick(event: any){
  	this.globalservice.gebruiker.postcode = this.postcode;
  	console.log(this.globalservice.gebruiker.postcode);
    this.Opslaan(this.globalservice.gebruiker)
   }


  Opslaan(newNAW){
  console.log("In Opslaan");
  console.log(newNAW);
  this.nawgegevensservice.OpslaanNAW(newNAW).subscribe((response) => 
  console.log(response));
  }

}