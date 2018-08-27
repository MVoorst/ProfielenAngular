import { Component, OnInit } from '@angular/core';
import { Vraag } from '/Users/oucer/Desktop/Profielenangular/ProfielenAngular/src/app/vraag';
import { VraagService } from '/Users/oucer/Desktop/Profielenangular/ProfielenAngular/src/app/vraag.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  vragen: Vraag[] = [];

  constructor(private vraagService: VraagService) { }

  ngOnInit() {
  }

  getVragen(): void {
    this.vraagService.getVragen()
      .subscribe(vragen => this.vragen = vragen.slice(1, 5));
  }
}
