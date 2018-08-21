import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreeerStudentService {
		private creeerStudentUrl: string = "http://localhost:8082/api/adminaccount/Creeerstudent";

httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};



	constructor(private httpClient: HttpClient) { }

	maakDeelnemerAan(user) {
		return this.httpClient.post(this.creeerStudentUrl, user, this.httpOptions);
		console.log(user)
	}

}
