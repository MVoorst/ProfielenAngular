import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardAdminService {
		private url: string = "http://localhost:8082/api/adminaccount/Dashboard";

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};


  constructor(private httpClient: HttpClient) { }
}
