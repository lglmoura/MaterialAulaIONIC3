import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NgforPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ngfor',
  templateUrl: 'ngfor.html',
})
export class NgforPage {

  public numeros:any[] = [1,2,3,4,5];
  public pessoas:any[] = [
       {nome:"Luiz", idade:48, peso:"106",notas:[1,2,3,4]},
    { nome: "Gustavo", idade: 45, peso: "89",notas: [5, 6, 7, 8] },
    { nome: "Moura", idade: 45, peso: "89", notas: [1, 2, 3, 4] },
    { nome: "Jose", idade: 45, peso: "89", notas: [5, 6, 7, 8] },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NgforPage');
  }

  clickAlet(valor:number){
    alert(valor);
  }
}
