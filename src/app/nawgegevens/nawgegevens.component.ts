import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {NawgegevensService} from "./nawgegevens.service";
import {HttpClient} from '@angular/common/http';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-nawgegevens',
  templateUrl: './nawgegevens.component.html',
  styleUrls: ['./nawgegevens.component.css']
})
export class NAWGegevensComponent implements OnInit {

	public gebruikersnaam : string = '';
	public wachtwoord : string = ''; 
	public postcode : string = '';


  constructor(private nawgegevensservice: NawgegevensService, private router: Router) { }

  ngOnInit() {
  }

  	 user: object;

  	onKey(event: any) {
  	this.postcode = event.target.value;
  		}

  	onClick(event: any){
  		console.log(this.postcode);
  		this.user = new User(this.gebruikersnaam, this.postcode);
  		this.Opslaan(this.user)
   		}

   	Opslaan(user){
   		console.log(this.user);
   		// this.nawgegevensservice.opslaanNAW(user).subscribe((response) => {
   		// 	console.log(response)

   		this.router.navigate(['Vraag'])	
 			}
	};
			
 