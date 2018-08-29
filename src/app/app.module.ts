import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardAdminComponent} from './login-admin/dashboard-admin/dashboard-admin.component'
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { DashboardUserComponent } from './login-user/dashboard-user/dashboard-user.component';
import { NAWGegevensComponent } from './login-user/nawgegevens/nawgegevens.component';
import { OpeningPageComponent} from './opening-page/opening-page.component';
import { VraagComponent } from './vraag/vraag.component';
import { CreeerStudentComponent } from './login-admin/dashboard-admin/creeer-student/creeer-student.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { VragenComponent } from './vragen/vragen.component';
import { VraagDetailComponent } from './vraag-detail/vraag-detail.component'
import { OverzichtNAWComponent } from './login-user/overzicht-naw/overzicht-naw.component'
import { VragenlijstComponent } from './login-admin/dashboard-admin/vragenlijst/vragenlijst.component';
import { StudentenoverzichtComponent } from './login-admin/dashboard-admin/studentenoverzicht/studentenoverzicht.component'


const appRoutes: Routes = [
  {path: '', redirectTo: '/Welkom', pathMatch: 'full'},
  {path: 'Welkom', component: OpeningPageComponent},
  {path: 'AdminLogin', component: LoginAdminComponent},
  {path: 'UserLogin', component: LoginUserComponent},
  {path: 'DashUser', component: DashboardUserComponent},
  {path: 'NAW', component: NAWGegevensComponent},
  {path: 'Vraag', component: VraagComponent},
  {path: 'dashboard', component: DashboardAdminComponent},
  {path: 'detail/:id', component: UserDetailComponent},
  {path: 'users', component: UsersComponent},
  {path: 'vragen', component: VragenComponent},
  {path: 'CreeerStudent', component: CreeerStudentComponent},
  {path: 'OverzichtNAW', component: OverzichtNAWComponent},
  {path: 'Vragenlijst', component: VragenlijstComponent},
  {path: 'StudentOverzicht', component: StudentenoverzichtComponent}
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
    UsersComponent,
    UserDetailComponent,
    MessagesComponent,
    VragenComponent,
    VraagDetailComponent,
    OverzichtNAWComponent,
    VragenlijstComponent,
    StudentenoverzichtComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }