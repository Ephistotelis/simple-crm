import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc } from 'firebase/firestore';

@Component({
  selector: 'app-dashboardmain',
  templateUrl: './dashboardmain.component.html',
  styleUrls: ['./dashboardmain.component.scss']
})
export class DashboardmainComponent implements OnInit {
  Users: Array<any> = [];
  selectedValue: any;
  allUsers: any = {
    allUsers: 0,
    admins: 0,
    editors: 0,
    users: 0,
  }
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(){
    this.firestore.collection('users').valueChanges({idField: 'customIdField'}).subscribe((users)=>{
      
      this.Users = users;
      console.log('All Users:', this.Users)
      this.countRoles()
    })
  }

  countRoles(){
    let allUsers = 0;
    let admins = 0;
    let editors = 0;
    let users = 0;
    this.Users.forEach(user => {
      allUsers++
        if(user.role == 'User'){
          users++;
        }
        if(user.role == 'Editor'){
          editors++;
        }
        if(user.role == 'Admin'){
          admins++;
        }
    });
    this.addUsers(allUsers, admins, editors, users);
  }


  addUsers(allUsers: number, admins: number, editors: number, users: number){
    this.allUsers.allUsers = allUsers;
    this.allUsers.admins = admins;
    this.allUsers.editors = editors;
    this.allUsers.users = users; 
  }


  updateUserRole(id: string, index: number){
      console.log(id)
      this.firestore.collection('users').doc(id).update({role: this.Users[index]['role']}).then()
      console.warn('New assigned Role:', this.Users[index]['role'])
      console.warn('User ID:', this.Users[index]['customIdField'])
  }
}
