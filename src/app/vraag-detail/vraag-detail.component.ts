import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Vraag } from '../vraag';
import { VraagService } from '../vraag.service';

@Component({
  selector: 'app-vraag-detail',
  templateUrl: './vraag-detail.component.html',
  styleUrls: ['./vraag-detail.component.css']
})
export class VraagDetailComponent implements OnInit {
  vraag: Vraag;

  constructor(
    private route: ActivatedRoute,
    private vraagService: VraagService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getVraag();
  }

  getVraag(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vraagService.getVraag(id)
      .subscribe(vraag => this.vraag = vraag);
  }

  goBack(): void {
    this.location.back();
  }

}
