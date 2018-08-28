import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NawgegevensService {
	private usernawUrl: string = "http://localhost:8082/api/useraccount/naw"


  	constructor(private httpClient: HttpClient) { }

  	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};


  	OpslaanNAW(newNAW) {
  		return this.httpClient.put(this.usernawUrl, newNAW, this.httpOptions);
  }
}
