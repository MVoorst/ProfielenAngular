import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Vraag } from './vraag';
import { VRAGEN } from './mock-vragen';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class VraagService {

  constructor(private messageService: MessageService) { }

  getVragen(): Observable<Vraag[]> {
    //TODO: send the message _after_fetching the vragen
    this.messageService.add('VraagService: fetched vragen');
    return of(VRAGEN);
  }

  getVraag(id: number): Observable<Vraag> {
    //TODO: send the message _after_fetching the vraag
    this.messageService.add('VraagService: fetched vraag id=${id}');
    return of (VRAGEN.find(vraag => vraag.id === id))
  }
}
