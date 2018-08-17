import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
	private url: string = "http://localhost:8082/api/useraccount/Login";

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

  	constructor(private httpClient: HttpClient) { }
 
  	inlogMethode (user){
  		
		return this.httpClient.post(this.url, user, this.httpOptions);
		
	}
}
