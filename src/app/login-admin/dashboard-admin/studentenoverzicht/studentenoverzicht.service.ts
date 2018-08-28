import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentenoverzichtService {

  constructor(private httpClient: HttpClient) { }

  private getVraagurl: string = "http://localhost:8082/api/vraag/"

  
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
  };
  

  getVraag(idVraag: number) {
    const url= `${this.getVraagurl}${idVraag}`;
        console.log(url);
        return this.httpClient.get(url,this.httpOptions);
  }
}
