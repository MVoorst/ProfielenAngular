import { Component, OnInit } from '@angular/core';
import { DashboardUserService } from '../dashboard-user/dashboard-user.service'

@Component({
  selector: 'app-overzicht-vragen',
  templateUrl: './overzicht-vragen.component.html',
  styleUrls: ['./overzicht-vragen.component.css']
})
export class OverzichtVragenComponent implements OnInit {

  constructor(private dashboarduserService: DashboardUserService) { }

  private idVraag: number = 1;
  private vraag: string;
  private antwoord: string;

  ngOnInit() {
    this.OphalenVraag();
    this.OphalenAntwoord();
  }

  onClick(event: any){
    this.OphalenVraag();
    this.OphalenAntwoord();
  }

  OphalenVraag() {
    this.dashboarduserService.getVraagUser(this.idVraag).subscribe((response :
    {contentvraag: string}) => {
      console.log(response.contentvraag);
      this.vraag = response.contentvraag
    });
  }

  OphalenAntwoord() {
    this.dashboarduserService.getAntwoordUser(this.idVraag).subscribe((response :
    {antwoord: string}) => {
      console.log(response.antwoord);
      this.antwoord = response.antwoord;
    });
  }
}
