import { Component, OnInit } from '@angular/core';
import { Vraag } from '../../vraag';
import { VraagService } from '../../vraag.service';
import { GlobalService } from '../../global.service';
import { DashboardUserService } from './dashboard-user.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {
  vragen: Vraag[] = [];

  constructor(private vraagService: VraagService, private globalservice: GlobalService, private dashboarduserService: DashboardUserService) { }
  private idVraag: number = 1;
  private vraag: string;
  private antwoord: string;


  ngOnInit(
    
  ) {
   
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