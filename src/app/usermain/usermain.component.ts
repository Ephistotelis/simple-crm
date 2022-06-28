import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UseradddialogComponent } from '../useradddialog/useradddialog.component';

@Component({
  selector: 'app-usermain',
  templateUrl: './usermain.component.html',
  styleUrls: ['./usermain.component.scss']
})
export class UsermainComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(UseradddialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit(): void {
  }

}
