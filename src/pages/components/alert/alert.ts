import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, AlertOptions } from 'ionic-angular';

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  mostrarlertBasico = () => {
    let alertBasicoOpts : AlertOptions = {
      title:"Ola aula",
      subTitle:"Espero que estaja Gostando",
      message:"Pooa 20182",
      buttons:["Obrigado"],
      enableBackdropDismiss:false
    }

    const alertBasico = this.alertCtrl.create(alertBasicoOpts);
    alertBasico.present();


  }

  mostrarlertPrompt = () => {
    
    const alertPrompt = this.alertCtrl.create({
      inputs:[{
        name: 'nome',
        type: "text",
        placeholder: "Digite o nome",
        label: "Nome"
      }],
      title: "Me diga o seu nome",
      buttons:[{
        text: 'Confirmar',
        handler: data =>{
          console.log(data);
          return false;
        }
      }]
    });
    alertPrompt.present();


  }

}
