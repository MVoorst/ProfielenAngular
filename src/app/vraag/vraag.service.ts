import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VraagService {
	private url: string = "http://localhost:8082/api/vraag";

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

  constructor(private httpClient: HttpClient) { 
  	
  	}
}