import { Injectable } from '@angular/core';
import { User } from './login-user/user';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }
  public gebruiker: User;
  
}
	