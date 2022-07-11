import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-authentication-service',
  templateUrl: './authentication-service.component.html',
  styleUrls: ['./authentication-service.component.scss']
})
export class AuthenticationServiceComponent implements OnInit {

  constructor(private auth: AngularFireAuth, private angularFirestore: AngularFireModule, private router: Router) { }

  ngOnInit(): void {
  }


  SignUp(email: string, password: string){
    this.auth.createUserWithEmailAndPassword(email, password).then(res=>{
      console.log('You are Successfully signed up!', res)
    }).catch(error=>{
      console.log('Something went wrong...', error)
    })
  }


  SignIn(email: string, password: string){
    this.auth.signInWithEmailAndPassword(email, password).then(res=>{
      console.log('You´re signed in!', res)
      console.log('You´re signed in!', res['user']['uid'])
      this.router.navigateByUrl('mainpage/usermain')
    }).catch(error=>{
      console.log('Something went wrong...', error)
    })
  }


  SignOut(){
    this.auth.signOut().then(()=>{
      console.log('You are logged out')
    })
  }
}
