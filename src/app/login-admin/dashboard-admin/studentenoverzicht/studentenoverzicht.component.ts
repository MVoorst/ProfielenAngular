import { Component, OnInit } from '@angular/core';
import {StudentenoverzichtService} from './studentenoverzicht.service'


@Component({
  selector: 'app-studentenoverzicht',
  templateUrl: './studentenoverzicht.component.html',
  styleUrls: ['./studentenoverzicht.component.css']
})
export class StudentenoverzichtComponent implements OnInit {

  constructor(private studentenoverzichtService: StudentenoverzichtService) { }
  

  ngOnInit() {
  }
  
}
