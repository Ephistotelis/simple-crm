import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UsermainComponent } from '../usermain/usermain.component';
import {FormControl, Validators} from '@angular/forms';
import { User } from 'src/models/user.class';
import { Firestore } from '@angular/fire/firestore';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-useradddialog',
  templateUrl: './useradddialog.component.html',
  styleUrls: ['./useradddialog.component.scss']
})
export class UseradddialogComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  user = new User();
  birthDate: Date;
 
  

  constructor(public dialogRef: MatDialogRef<UsermainComponent>, private firestore: AngularFirestore) {
   }

  ngOnInit(): void {
  }


   saveUser(){
    this.user.birthday = this.birthDate.getTime()
    this.firestore.collection('users').add(this.user.toJson()).then((result: any)=>{
      console.log('Added user finished:', result)
    })
    console.log('user created:', this.user )
  }

  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  /* saveUserJson(){    DELETED SOON OLD VERSION
    this.user.birthday = this.birthDate.getTime()
    this.firestore.collection('users').add({user: JSON.stringify(this.user)}).then((result: any)=>{
      console.log('Added user finished:', result)
    })
    console.log('user created:', this.user )
  } */

  
}
