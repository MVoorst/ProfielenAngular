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
  public geboortedatum: number;
  public huisnummer: number;
  public straat: string;
  public postcode: string;
  public woonplaats: string;
  public linkedinadres: string;
  public githubadres: string;

  constructor(private globalservice: GlobalService, private nawgegevensservice: NawgegevensService, private router: Router) { }


  ngOnInit() {
  }

<<<<<<< HEAD
  	 user: object;
=======
  onKeyVoornaam(event: any) {
  	this.globalservice.gebruiker.voornaam = event.target.value;
  }

  onKeyTussenvoegsel(event : any) {
    this.globalservice.gebruiker.tussenvoegsel = event.target.value;
  }

  onKeyAchternaam(event : any){
    this.globalservice.gebruiker.achternaam = event.target.value;
  }

  onKeyGeslacht(event : any){
    this.globalservice.gebruiker.geslacht = event.target.value;
  }
  
  onKeyGeboortedatum(event : any){
    this.globalservice.gebruiker.geboortedatum = event.target.value;
  }

  onKeyHuisnummer(event : any) {
    this.globalservice.gebruiker.huisnummer = event.target.value;
  }
>>>>>>> master

  onKeyStraat(event : any){
    this.globalservice.gebruiker.straat = event.target.value;
  }

  onKeyPostcode(event : any){
    this.globalservice.gebruiker.postcode = event.target.value;
  }

 onKeyWoonplaats(event : any){
    this.globalservice.gebruiker.woonplaats = event.target.value;
  }

  onKeyLIadres(event : any){
    this.globalservice.gebruiker.linkedinadres = event.target.value;
  }

  onKeyGHadres(event : any){
    this.globalservice.gebruiker.githubadres = event.target.value;
  }

  onClick(event: any){
    this.Opslaan(this.globalservice.gebruiker)
   }


  Opslaan(newNAW){
    console.log("In Opslaan");
    console.log(newNAW);
    this.nawgegevensservice.OpslaanNAW(newNAW).subscribe((response) => {
 
      if (response == this.globalservice.gebruiker.id) {
        alert("Opgeslagen");
        this.router.navigate(['OverzichtNAW']);
      } 
      
    });
  }
<<<<<<< HEAD

}
=======
}
   	
    



>>>>>>> master
