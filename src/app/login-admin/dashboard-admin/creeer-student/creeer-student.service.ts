import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreeerStudentService {
		private creeerStudentUrl: string = "http://localhost:8082/api/useraccount";

httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};



	constructor(private httpClient: HttpClient) { }

	maakDeelnemerAan(user) {
		//var gebruiker = {gebruikersnaam: user.gebruikersnaam, emailadress: user.emailadress};
		//console.log(gebruiker);
		console.log(user.emailadres);
		console.log('In methode maakDeelnemerAan');

		return this.httpClient.post(this.creeerStudentUrl, user, this.httpOptions);		
	}

}
