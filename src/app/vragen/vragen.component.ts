import { Component, OnInit } from '@angular/core';

import { Vraag } from '../vraag';
import { VraagService } from '../vraag.service';

@Component({
  selector: 'app-vragen',
  templateUrl: './vragen.component.html',
  styleUrls: ['./vragen.component.css']
})
export class VragenComponent implements OnInit {
  vragen: Vraag[];

  selectedVraag: Vraag;

  constructor(private vraagService: VraagService) { }

  ngOnInit() {
    this.getVragen();
  }

  getVragen(): void {
    this.vraagService.getVragen()
      .subscribe(vragen => this.vragen = vragen);
  }

}
