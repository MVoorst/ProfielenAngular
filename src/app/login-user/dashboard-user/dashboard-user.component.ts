import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';


@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  constructor(private globalservice: GlobalService) { }

  ngOnInit() {
  }

}
