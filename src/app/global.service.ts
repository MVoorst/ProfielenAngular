import { Injectable } from '@angular/core';
import { User } from './user';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }
  public gebruiker: User;
  
  public admin: Admin;
}