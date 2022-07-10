import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { MainpageComponent } from './mainpage.component';
import { DashboardmainComponent } from './components/dashboardmain/dashboardmain.component';
import { UsermainComponent } from './components/usermain/usermain.component';
import { UseradddialogComponent } from './components/useradddialog/useradddialog.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { EdituserdetailComponent } from './components/edituserdetail/edituserdetail.component';
import { TodomainComponent } from './components/todomain/todomain.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginModule } from '../login/login.module';
import { LogoutModule } from '../logout/logout.module';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    MainpageComponent,
    DashboardmainComponent,
    UsermainComponent,
    UseradddialogComponent,
    UserdetailComponent,
    EdituserdetailComponent,
    TodomainComponent,

  ],
  imports: [
    CommonModule,
    MainpageRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatCardModule,
    MatTableModule,
    MatMenuModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
   
  ]
})
export class MainpageModule { }
