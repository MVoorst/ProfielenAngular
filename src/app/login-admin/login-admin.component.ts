import { Component, OnInit } from '@angular/core';
import { Admin} from "../admin";
import { LoginService} from './login.service';
import { HttpClient} from '@angular/common/http';
import { RouterModule, Router} from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})

export class LoginAdminComponent implements OnInit {
	public id: number;
  public naamMaster: string;
  public gebruikersnaam: string;
  public wachtwoord: string;

	constructor(private httpclient: HttpClient, private loginservice: LoginService, private router: Router, private globalservice: GlobalService){}

  	ngOnInit() {
 	}
  	admin: object;

  	onKey(event: any) {
  		this.gebruikersnaam = event.target.value;
  	}

  	onKeyww(event: any) {
  		this.wachtwoord = event.target.value;
  	}

  	onClick(event: any){
  		this.globalservice.admin = new Admin(this.id, this.naamMaster, this.gebruikersnaam,this.wachtwoord);
  		console.log(this.globalservice.admin);
  		this.Inloggen(this.globalservice.admin);
  	}

  	Inloggen(admin){
  		console.log(admin);
  		this.loginservice.inlogMethodeAdmin(admin).subscribe((response :
        {message : string}) => {
			  console.log(response.message);
        if (response.message == "Success"){
          console.log(this.globalservice.admin.gebruikersnaam);
          this.loginservice.getAdmin(this.globalservice.admin.gebruikersnaam).subscribe(
          (admin : Admin) => {
            console.log(admin)
            this.globalservice.admin.id = admin.id;
            console.log(this.globalservice.admin.id);
          });
          this.router.navigate(['DashAdmin'])
      }
      });
      
    };
}
