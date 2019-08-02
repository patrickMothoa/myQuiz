import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAdgp1m62HvyKH5yM9_9kpQDRCDymlW-W4",
  authDomain: "myquiz-52f27.firebaseapp.com",
  databaseURL: "https://myquiz-52f27.firebaseio.com",
  projectId: "myquiz-52f27",
  storageBucket: "",
  messagingSenderId: "44544245909",
  appId: "1:44544245909:web:2e47161bb3266869"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
