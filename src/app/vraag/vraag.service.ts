import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {GlobalService} from '../global.service';

@Injectable({
  providedIn: 'root'
})
export class VraagService {
	private antwoordurl: string = "http://localhost:8082/api/invultaak/idvraag=";

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

  constructor(private httpClient: HttpClient, private globalService: GlobalService) { 
  	
		}
	
	AntwoordenPost(antwoord: string) {
		const url =  `${this.antwoordurl}${1}/iduser=${this.globalService.gebruiker.id}/${antwoord}`;
		console.log(url);
		return this.httpClient.post(url, antwoord, this.httpOptions);
	}
}