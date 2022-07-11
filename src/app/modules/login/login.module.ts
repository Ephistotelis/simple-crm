import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthenticationServiceComponent } from './authentication-service/authentication-service.component';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    AuthenticationServiceComponent,
    AuthGuardComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  providers: [AuthenticationServiceComponent],
})
export class LoginModule { }
