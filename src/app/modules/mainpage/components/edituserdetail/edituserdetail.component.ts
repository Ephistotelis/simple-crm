import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import {FormControl, Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { __values } from 'tslib';
@Component({
  selector: 'app-edituserdetail',
  templateUrl: './edituserdetail.component.html',
  styleUrls: ['./edituserdetail.component.scss']
})
export class EdituserdetailComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  user: User;
  params: any = '';

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {

  }

  saveUser(){
    this.firestore.collection('users').doc(this.params).update(this.user.toJson()).then(()=>{
      console.log('Update successfully')
    }); 
  }
 

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
