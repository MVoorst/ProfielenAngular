import { Component, OnInit } from '@angular/core';
import {StudentenoverzichtService} from './studentenoverzicht.service'


@Component({
  selector: 'app-studentenoverzicht',
  templateUrl: './studentenoverzicht.component.html',
  styleUrls: ['./studentenoverzicht.component.css']
})
export class StudentenoverzichtComponent implements OnInit {

  constructor(private studentenoverzichtService: StudentenoverzichtService) { }
  private idVraag: number = 1;

  ngOnInit() {
  }
  onClick(event: any){
    this.Ophalen();
  }

  Ophalen() {
   // this.studentenoverzichtService.getVraagUser(this.idVraag).subscribe(response) => {

    }
    

}
