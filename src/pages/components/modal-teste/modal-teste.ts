import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalTestePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-teste',
  templateUrl: 'modal-teste.html',
})
export class ModalTestePage {
  
  public dados : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.dados = navParams.get('nome');
    console.log(this.dados)
    
  }

  ionViewDidLoad() {
    this.dados += " Moura";
  }

  fechar = () =>this.viewCtrl.dismiss(this.dados);

}
