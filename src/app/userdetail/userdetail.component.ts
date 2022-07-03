import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {
  
params: any = '';
user: any = '';
birthday: Date;
  constructor(private firestore: AngularFirestore, private router: ActivatedRoute) { }

  ngOnInit(): void {
    let params = this.router.params;
    this.params = params['_value']['id']
    console.log(this.params)
    this.loadUser()
  }

  loadUser(){
     this.firestore.collection('users').doc(this.params).valueChanges({idField: 'customIdField'}).subscribe((user)=>{
    console.log(user)
      this.user = user
      this.birthday = new Date(user['birthday'])
    })
    
  }
}
