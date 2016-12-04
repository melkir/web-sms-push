import { Component } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'F*ck yeah this app works!';
  isAuth = false;
  user = {};

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(
      user => this._changeState(user),
      error => console.trace(error)
    );
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google
    });
  }

  logout() {
    this.af.auth.logout();
  }

  private _changeState(user: any = null) {
    if (user) {
      this.isAuth = true;
      this.user = this._getUserInfo(user)
    }
    else {
      this.isAuth = false;
      this.user = {};
    }
  }

  private _getUserInfo(user: any): any {
    if (!user) {
      return {};
    }
    let data = user.auth.providerData[0];
    return {
      name: data.displayName,
      avatar: data.photoURL,
      email: data.email,
      provider: data.providerId
    };
  }

}
