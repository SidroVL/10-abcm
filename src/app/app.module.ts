import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
//*.7 despues de crear el proytecto en firebase importamos, cambiamos el from de los 2
// muy importante, permisos en firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// *.8 completo la contstante que copio de firebase, cuidado de usar las propias de mi proyecto
export const firebaseConfig = {
  apiKey: "AIzaSyDCVupNwFp7Kspxo1DIt-RxhRLFkPwegy0",
  authDomain: "abcm-a0ccd.firebaseapp.com",
  databaseURL: "https://abcm-a0ccd.firebaseio.com",
  projectId: "abcm-a0ccd",
  storageBucket: "abcm-a0ccd.appspot.com",
  messagingSenderId: "855124253400"
};

// *.4 elimino HomePage de delaration y de entryComponets
// *.5 elimino el import de HomePage
// *.6 descargo librerias de angular/firebase : npm install angularfire2 firebase promise-polyfill --save
// instalar rxjs6 npm install rxjs@6 rxjs-compat@6 promise-polyfill --save  || bajar a la version 6.0 y quitar el ^ de la version rxjs
@NgModule({
  declarations: [
    MyApp

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // *.9 copiamos los imports de firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
