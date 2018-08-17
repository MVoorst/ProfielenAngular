import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
	private url: string = "http://localhost:8082/api/adminaccount/Login";

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

  	constructor(private httpClient: HttpClient) { }
 
  	inlogMethode (admin){
  		
		return this.httpClient.post(this.url, admin, this.httpOptions);
		
	}
}
