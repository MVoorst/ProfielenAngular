import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { RouterModule, Router} from '@angular/router';
import {VraagService} from "./vraag.service";

@Component({
  selector: 'app-vraag',
  templateUrl: './vraag.component.html',
  styleUrls: ['./vraag.component.css']
})
export class VraagComponent implements OnInit {

	public vraagcontent : string;
  public antwoorddeelnemer : string;


  constructor(private vraagservice: VraagService, private router: Router) { }

  ngOnInit() {
  }

 user: object;

  	onKey(event: any) {
  	this.antwoorddeelnemer = event.target.value;
  		}

  	onClick(event: any){
      this.Antwoorden(this.antwoorddeelnemer);
  	}

    Antwoorden(antwoord: string) {
      this.vraagservice.AntwoordenPost(antwoord).subscribe(
          (error: HttpErrorResponse) => {
          alert("Gepost");
          //console.log(error.status);
          if (error.status == 500){
            console.log("gelukt met antwoorden");
            //this.router.navigate(['NAW']);
          } else {
            console.log("niet gelukt");
          }
        })
          
      };
    
}