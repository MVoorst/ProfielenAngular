import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VragenlijstService {
	private vraagopslaanurl: string = "http://localhost:8082/api/vragenlijst/id=";


	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};


  constructor(private httpClient: HttpClient) { }


  	VraagOpslaan(id: number, vraag: string) : Observable <{}> {
  		const url = `${this.vraagopslaanurl}${1}/${vraag}`;
      console.log(url);
  		return this.httpClient.post(url, vraag, this.httpOptions);
  	}
}