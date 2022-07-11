import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceComponent } from './authentication-service/authentication-service.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private authenticationService: AuthenticationServiceComponent) { }

  ngOnInit(): void {
  }


    signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
    }
    
    signIn() {
    this.authenticationService.SignIn(this.email, this.password);
    }
    
    signOut() {
    this.authenticationService.SignOut();
    }

}
