import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthenticationServiceComponent } from './authentication-service/authentication-service.component';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';
import { FormsModule } from '@angular/forms';
import { LoginFailedComponent } from './login-failed/login-failed.component';
import { MainpageModule } from '../mainpage/mainpage.module';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    LoginComponent,
    AuthenticationServiceComponent,
    AuthGuardComponent,
    LoginFailedComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MainpageModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [AuthenticationServiceComponent,
  FooterComponent],
})
export class LoginModule { }
