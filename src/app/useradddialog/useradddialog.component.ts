import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UsermainComponent } from '../usermain/usermain.component';

@Component({
  selector: 'app-useradddialog',
  templateUrl: './useradddialog.component.html',
  styleUrls: ['./useradddialog.component.scss']
})
export class UseradddialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UsermainComponent>) { }

  ngOnInit(): void {
  }

}
