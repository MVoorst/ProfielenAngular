import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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


  constructor(private vraagservice: VraagService) { }

  ngOnInit() {
  }

 user: object;

  	onKey(event: any) {
  	this.antwoorddeelnemer = event.target.value;
  		}

  	onClick(event: any){
  	}

}