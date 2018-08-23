import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';
import { RouterModule, Router} from '@angular/router';


@Component({
  selector: 'app-overzicht-naw',
  templateUrl: './overzicht-naw.component.html',
  styleUrls: ['./overzicht-naw.component.css']
})
export class OverzichtNAWComponent implements OnInit {

  constructor(private globalservice: GlobalService, private router: Router) { }

  ngOnInit() {
  }


   onClick(event: any){
       this.router.navigate(['Vraag']);
   }
}
