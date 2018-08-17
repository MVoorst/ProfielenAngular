import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardAdminComponent} from './dashboard-admin/dashboard-admin.component'
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { NAWGegevensComponent } from './nawgegevens/nawgegevens.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/Login', pathMatch: 'full' },
  {path: 'Login', component: LoginAdminComponent},
  {path: 'DashAdmin', component : DashboardAdminComponent}
  
]


@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    DashboardAdminComponent,
    LoginUserComponent,
    DashboardUserComponent,
    NAWGegevensComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
