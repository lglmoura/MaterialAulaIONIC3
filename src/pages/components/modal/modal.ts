import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    const modal = this.modalCtrl.create('ModalTestePage',{nome:"luiz"},{enableBackdropDismiss:true});
    modal.onDidDismiss(data =>{
      if(data) console.log('dados => ', data);
    })
    setTimeout(() =>{
      modal.present();
    },3500);
  }

}
