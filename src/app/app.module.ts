import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { MessageFormComponent } from './message-form/message-form.component';
import { FirebaseConfig } from '../../config';

export const firebaseConfig = {
  apiKey: FirebaseConfig.apiKey,
  authDomain: FirebaseConfig.authDomain,
  databaseURL: FirebaseConfig.databaseURL,
  storageBucket: FirebaseConfig.storageBucket,
  messagingSenderId: FirebaseConfig.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, {
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }),
    MaterialModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
