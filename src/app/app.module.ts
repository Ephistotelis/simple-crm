import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { DashboardmainComponent } from './dashboardmain/dashboardmain.component';
import { UsermainComponent } from './usermain/usermain.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { UseradddialogComponent } from './useradddialog/useradddialog.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { AngularFireModule} from '@angular/fire/compat';
import { UserdetailComponent } from './userdetail/userdetail.component'
import {MatMenuModule} from '@angular/material/menu';
import { EdituserdetailComponent } from './edituserdetail/edituserdetail.component';
import { TodomainComponent } from './todomain/todomain.component';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [
    AppComponent,
    DashboardmainComponent,
    UsermainComponent,
    UseradddialogComponent,
    UserdetailComponent,
    EdituserdetailComponent,
    TodomainComponent,

  ],
  imports: [
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
    AngularFireModule.initializeApp(environment.firebase)
    /* provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()), */ 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
