import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';


@Component({
  selector: 'app-overzicht-naw',
  templateUrl: './overzicht-naw.component.html',
  styleUrls: ['./overzicht-naw.component.css']
})
export class OverzichtNAWComponent implements OnInit {

  constructor(private globalservice: GlobalService) { }

  ngOnInit() {
  }

}
