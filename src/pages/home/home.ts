import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { IonicPage } from '../../../node_modules/ionic-angular/navigation/ionic-page';
import { CategoriasPage } from '../categorias/categorias';
import { takeUntil } from '../../../node_modules/rxjs/operator/takeUntil';
import { CredenciaisDTO } from '../../models/credenciais.dto';

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

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false)
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true)
  }

  login() {
    console.log(this.creds)
    this.navCtrl.setRoot('CategoriasPage')
  }
}
