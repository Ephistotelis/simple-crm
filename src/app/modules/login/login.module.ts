import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthenticationServiceComponent } from './authentication-service/authentication-service.component';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';
import { FormsModule } from '@angular/forms';
import { LoginFailedComponent } from './login-failed/login-failed.component';


@NgModule({
  declarations: [
    LoginComponent,
    AuthenticationServiceComponent,
    AuthGuardComponent,
    LoginFailedComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  providers: [AuthenticationServiceComponent],
})
export class LoginModule { }
