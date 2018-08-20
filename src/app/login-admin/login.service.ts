import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
	private adminAccountLoginUrl: string = "http://localhost:8082/api/adminaccount/Login";
	private userAccountLoginUrl: string = "http://localhost:8082/api/useraccount/Login";

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

  	constructor(private httpClient: HttpClient) { }
 
  	inlogMethodeAdmin (admin){
  		
		return this.httpClient.post(this.adminAccountLoginUrl, admin, this.httpOptions);
		
	}

	inlogMethodeUser (user) {
		return this.httpClient.post(this.userAccountLoginUrl, user, this.httpOptions);
	}
}
