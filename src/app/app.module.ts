import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardAdminComponent} from './login-admin/dashboard-admin/dashboard-admin.component'
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { NAWGegevensComponent } from './nawgegevens/nawgegevens.component';
import { OpeningPageComponent} from './opening-page/opening-page.component';
import { VraagComponent } from './vraag/vraag.component';
import { CreeerStudentComponent } from './login-admin/dashboard-admin/creeer-student/creeer-student.component'


const appRoutes: Routes = [
  {path: '', redirectTo: '/Welkom', pathMatch: 'full' },
  {path: 'Welkom', component: OpeningPageComponent},
  {path: 'AdminLogin', component: LoginAdminComponent},
  {path: 'UserLogin', component: LoginUserComponent},
  {path: 'DashAdmin', component : DashboardAdminComponent},
  {path: 'NAW', component: NAWGegevensComponent},
  {path: 'Vraag', component: VraagComponent}
  
]


@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    DashboardAdminComponent,
    LoginUserComponent,
    DashboardUserComponent,
    NAWGegevensComponent,
    OpeningPageComponent,
    VraagComponent,
    CreeerStudentComponent,
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
