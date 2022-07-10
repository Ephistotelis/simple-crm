import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { EdituserdetailComponent } from '../edituserdetail/edituserdetail.component';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {
  
params: string = '';
user: User = new User(); // to avoid error message user.firstname etc. not found
birthdayWhole: Date;
birthdayYMD: string;
  constructor(private firestore: AngularFirestore, private router: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    let params = this.router.params;
    this.params = params['_value']['id']
    console.log(this.params)
    this.loadUser()
  }

  async loadUser(){
    this.firestore.collection('users').doc(this.params).valueChanges({idField: 'customIdField'}).subscribe((user)=>{
      this.user = new User(user)
      this.birthdayWhole = new Date(user['birthday'])
      this.birthdayYMD = this.getBirthDateYMD()
      console.log(user)
    })
  }


  getBirthDateYMD(){
    let year = this.birthdayWhole.getUTCFullYear();
    let month = this.birthdayWhole.getUTCMonth() + 1;
    let day = this.birthdayWhole.getUTCDate();
    let newdate = month + '/' + day + '/' + year;
    return  newdate
  }


  getURL(){
    var dummy = document.createElement('input'),
    text = window.location.href;
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert('copied URL')
  }


  editUserDialog(){
    const dialog = this.dialog.open(EdituserdetailComponent);
    dialog.componentInstance.user = new User(this.user.toJson());
    dialog.componentInstance.params = this.params;
  }
}
