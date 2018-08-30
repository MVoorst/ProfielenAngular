import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RouterModule, Router} from '@angular/router';
import { VraagService } from "./vraag.service";
import { DashboardUserService } from '../login-user/dashboard-user/dashboard-user.service';

@Component({
  selector: 'app-vraag',
  templateUrl: './vraag.component.html',
  styleUrls: ['./vraag.component.css']
})
export class VraagComponent implements OnInit {
  private idVraag: number = 1;
	public vraagcontent : string;
  public antwoorddeelnemer : string;

  constructor(private vraagservice: VraagService, private router: Router, private dashboarduserService: DashboardUserService) { }

  ngOnInit() {
    this.OphalenVraag();
  }

 user: object;

  onKey(event: any) {
  	this.antwoorddeelnemer = event.target.value;
  }

  onClick(event: any){
    alert("Antwoord Opgeslagen!");
    this.Antwoorden(this.antwoorddeelnemer);
  	}

    Antwoorden(antwoord: string) {
      this.vraagservice.AntwoordenPost(antwoord).subscribe(
          (error: HttpErrorResponse) => {
            if (error.status == 500){
              console.log("gelukt met antwoorden");
            } else {
              console.log("niet gelukt");
            }
        })          
      };

    OphalenVraag() {
      this.dashboarduserService.getVraagUser(this.idVraag).subscribe((response :
      {contentvraag: string}) => {
        console.log(response.contentvraag);
        this.vraagcontent = response.contentvraag
        });
      }
}