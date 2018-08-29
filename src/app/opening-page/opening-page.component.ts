import { Component, OnInit } from '@angular/core';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-opening-page',
  templateUrl: './opening-page.component.html',
  styleUrls: ['./opening-page.component.css']
})
export class OpeningPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  RedirectToAdmin() {
  	this.router.navigate(['AdminLogin'])
  }

  RedirectToUser() {
  	this.router.navigate(['UserLogin'])
  }

  getUrl()
{
  return "scr(assets/Images/achievement-agreement-arms-1068523.png)";
}
}
