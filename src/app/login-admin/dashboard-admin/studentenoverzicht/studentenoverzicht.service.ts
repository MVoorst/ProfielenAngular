import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { User } from '../../../user';

@Injectable({
  providedIn: 'root'
})
export class StudentenoverzichtService {
		private userAccountallUrl: string= "http://localhost:8082/api/useraccount";
		private exporteerAlsWordUrl: string= "http://localhost:8082/api/cv/ExportAsWord";

		httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

  constructor(private httpClient: HttpClient) { }

	getAllUsers(): Observable<User[]> {
		return this.httpClient.get<User[]>(this.userAccountallUrl,this.httpOptions);
	}

	ExporterenAlsWord(deelnemer) {
		console.log(deelnemer);
		return this.httpClient.post(this.exporteerAlsWordUrl, deelnemer, this.httpOptions);
	}

	Doorverwijzen(deelnemer) {
		console.log(deelnemer.id);
	}
}
