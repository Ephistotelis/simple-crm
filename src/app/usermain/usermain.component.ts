import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { UseradddialogComponent } from '../useradddialog/useradddialog.component';

@Component({
  selector: 'app-usermain',
  templateUrl: './usermain.component.html',
  styleUrls: ['./usermain.component.scss']
})
export class UsermainComponent implements OnInit {
  userList: Array<any> = [];
  //userList2: Array<any> = [];     DELETED SOON OLD VERSION



  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(UseradddialogComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


  ngOnInit(): void {
    this.loadUsers()
  }


   loadUsers(){
    this.firestore.collection('users').valueChanges().subscribe((changes: any)=>{
      console.log('Received changes from DB', changes)
      this.userList = changes;
    })
  } 


  /* loadUsersJson(){     DELETED SOON OLD VERSION
    this.firestore.collection('users').valueChanges().subscribe((changes: any)=>{
      console.log('Received changes from DB', changes)
      changes.forEach(data => {
        let user = JSON.parse(data['user'])
        this.userList2.push(user)
      });
    })
  } */
}
