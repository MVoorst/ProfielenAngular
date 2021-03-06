import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardUserService {

  constructor(private httpClient: HttpClient) { }

  private getVraagurl: string = "http://localhost:8082/api/vraag/"
  private getAntwoordurl: string = "http://localhost:8082/api/invultaak/"

  httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
  };

  getVraagUser(idVraag: number) {
    const url= `${this.getVraagurl}${idVraag}`;
    console.log(url);
    return this.httpClient.get(url,this.httpOptions);
  }

  getAntwoordUser(idVraag: number) : Observable <{}>{
    const url = `${this.getAntwoordurl}${1}`;
    console.log(url);
    return this.httpClient.get(url,this.httpOptions);
  }
}
