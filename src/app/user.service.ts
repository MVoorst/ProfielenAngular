import { Injectable } from '@angular/core';
 
import { Observable, of } from 'rxjs';
 
import { User } from './user';
import { USERS } from './mock-users';
import { MessageService } from './message.service';
 
@Injectable({
  providedIn: 'root',
})
export class UserService {
 
  constructor(private messageService: MessageService) { }
 
  getUsers(): Observable<User[]> {
    // TODO: send the message _after_ fetching the users
    this.messageService.add('UserService: fetched users');
    return of(USERS);
  }

  getUser(id: number): Observable<User> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`UserService: fetched user id=${id}`);
    return of(USERS.find(user => user.id === id));
  }
  roepOmerOp(): string {
    return "KingOmer";
  }
}