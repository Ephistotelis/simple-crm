import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageModule } from './modules/mainpage/mainpage.module';
import { LoginModule } from './modules/login/login.module';
import { LogoutModule } from './modules/logout/logout.module';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainpageModule,
    LoginModule,
    LogoutModule 
    /* provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()), */ 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
