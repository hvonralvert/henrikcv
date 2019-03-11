import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { MatSliderModule } from '@angular/material/slider';

import { SplashPage } from '@henrik/pages/splash.page/splash.page';

import { LoginModalModule } from '@henrik/modals/login.modal.module';
import { MakModalModule } from '@henrik/modals/mak.modal.module';
import { DemoModalModule } from '@henrik/modals/demo.modal.module';

import { GoogleAnalyticsService } from '@henrik/services/googleanalytics.service';



@NgModule({
  declarations: [
    AppComponent,
    SplashPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    LoginModalModule,
    HttpClientModule,
    DemoModalModule,
    MatSliderModule,
    MakModalModule
  ],
  providers: [GoogleAnalyticsService],
  entryComponents: [SplashPage],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(protected gaServ: GoogleAnalyticsService) { }
}
