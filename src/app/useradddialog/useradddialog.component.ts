import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UsermainComponent } from '../usermain/usermain.component';
import {FormControl, Validators} from '@angular/forms';
import { User } from 'src/models/user.class';
import { Firestore } from '@angular/fire/firestore';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';


@Component({
  selector: 'app-useradddialog',
  templateUrl: './useradddialog.component.html',
  styleUrls: ['./useradddialog.component.scss']
})
export class UseradddialogComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  user = new User();
  birthDate: Date;



  constructor(public dialogRef: MatDialogRef<UsermainComponent>, private firestore: Firestore) {
   }

  ngOnInit(): void {
  }


  saveUser(){
    const coll = collection(this.firestore, 'users')
    this.user.birthday = this.birthDate.getTime()
    setDoc(doc(coll), {user: JSON.stringify(this.user)})
    console.log('user created:', this.user )
  }

  getUser(){
    const coll = collection(this.firestore, 'users')
    let thisDoc = getDoc(doc(coll, 'HP1COggJiLZsNSSXfLhr'))
    console.log(thisDoc)
  }
}
