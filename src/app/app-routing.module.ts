import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFailedComponent } from './modules/login/login-failed/login-failed.component';
import { LoginComponent } from './modules/login/login.component';
import { LogoutComponent } from './modules/logout/logout.component';
import { MainpageComponent } from './modules/mainpage/mainpage.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'loginfailed', component: LoginFailedComponent},
 /*  {path: 'usermain', component: UsermainComponent},
  {path: 'user/:id', component: UserdetailComponent},
  {path: 'user/:id/todos', component: TodomainComponent}, */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
