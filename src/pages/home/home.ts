import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { IonicPage } from '../../../node_modules/ionic-angular/navigation/ionic-page';
import { CategoriasPage } from '../categorias/categorias';
import { takeUntil } from '../../../node_modules/rxjs/operator/takeUntil';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  }

  constructor(public navCtrl: NavController, public menu: MenuController, public auth: AuthService) {
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false)
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true)
  }

  ionViewDidEnter() {
    this.auth.refreshToken()
      .subscribe(
        response => {
          this.auth.successfulLogin(response.headers.get('Authorization'))
          this.navCtrl.setRoot('CategoriasPage')
        },
        error => { }
      )
  }

  login() {
    this.auth.authenticate(this.creds)
      .subscribe(
        response => {
          this.auth.successfulLogin(response.headers.get('Authorization'))
          this.navCtrl.setRoot('CategoriasPage')
        },
        error => { }
      )
  }

  signup() {
    this.navCtrl.push('SignupPage')
  }
}
