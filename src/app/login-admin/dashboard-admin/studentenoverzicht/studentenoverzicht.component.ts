import { Component, OnInit } from '@angular/core';
import { StudentenoverzichtService } from './studentenoverzicht.service';
import {HttpClient} from '@angular/common/http';
import { RouterModule, Router} from '@angular/router';
import { User } from '../../../user';


@Component({
  selector: 'app-studentenoverzicht',
  templateUrl: './studentenoverzicht.component.html',
  styleUrls: ['./studentenoverzicht.component.css']
})
export class StudentenoverzichtComponent implements OnInit {

	admin: object;
	public deelnemers = [];
	deelnemer: User;


  constructor(private httpclient: HttpClient, private studentenoverzichtservice: StudentenoverzichtService, private router: Router) { }

  ngOnInit() {
  	this.studentenoverzichtservice.getAllUsers().subscribe((data)=> this.deelnemers = data);
  	console.log(this.deelnemers); }
 
	onClickExporteer(deelnemer: User) {
  		this.studentenoverzichtservice.ExporterenAlsWord(deelnemer).subscribe((response) => {
  			console.log(this.deelnemer);
  			console.log(response);
  		});
  	}

  	onClickDoorverwijzen(deelnemer: User) {
  		this.studentenoverzichtservice.Doorverwijzen(deelnemer);
  	}

}