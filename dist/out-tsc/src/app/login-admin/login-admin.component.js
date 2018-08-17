var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Admin } from "../admin";
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
var LoginAdminComponent = /** @class */ (function () {
    function LoginAdminComponent(httpclient, loginservice) {
        this.httpclient = httpclient;
        this.loginservice = loginservice;
        this.gebruikersnaam = '';
    }
    LoginAdminComponent.prototype.ngOnInit = function () {
    };
    LoginAdminComponent.prototype.onKey = function (event) {
        this.gebruikersnaam = event.target.value;
    };
    LoginAdminComponent.prototype.onKeyww = function (event) {
        this.wachtwoord = event.target.value;
    };
    LoginAdminComponent.prototype.onClick = function (event) {
        this.admin = new Admin(this.gebruikersnaam, this.wachtwoord);
        console.log(this.admin);
        this.Inloggen(this.admin);
    };
    LoginAdminComponent.prototype.Inloggen = function (admin) {
        this.loginservice.inlogMethode(admin).subscribe(function (response) {
            console.log(response);
        });
    };
    LoginAdminComponent = __decorate([
        Component({
            selector: 'app-login-admin',
            templateUrl: './login-admin.component.html',
            styleUrls: ['./login-admin.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient, LoginService])
    ], LoginAdminComponent);
    return LoginAdminComponent;
}());
export { LoginAdminComponent };
//# sourceMappingURL=login-admin.component.js.map