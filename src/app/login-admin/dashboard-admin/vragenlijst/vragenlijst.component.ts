import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RouterModule, Router} from '@angular/router';
import { VraagComponent } from 'src/app/vraag/vraag.component';
import { VraagService } from 'src/app/vraag/vraag.service';
import { GlobalService } from 'src/app/global.service';
import { VragenlijstService } from 'src/app/login-admin/dashboard-admin/vragenlijst/vragenlijst.service';
import { VRAGEN } from '../../../mock-vragen'
import { Vraag } from '../../../vraag'



@Component({
  selector: 'app-vragenlijst',
  templateUrl: './vragenlijst.component.html',
  styleUrls: ['./vragenlijst.component.css']
})
export class VragenlijstComponent implements OnInit {

  	public vraag: string;
    public id: number;
   

  constructor(private httpclient: HttpClient, private router: Router, private globalservice: GlobalService, private vragenlijstservice : VragenlijstService) { }


  ngOnInit() {
  }

  onKeyID(event: any) {
    this.id = event.target.value;
  }

	onKey(event: any){
		this.vraag = event.target.value;
	}

	onClick(event: any) {
    this.Opslaan(this.vraag);
 	}

 	Opslaan(vraag) {
 		//console.log(this.vraag);
 		this.vragenlijstservice.VraagOpslaan(this.id, this.vraag).subscribe((response)=> {
         console.log(response);
         

         });
	;}
}