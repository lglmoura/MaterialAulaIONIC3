import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ActionSheetOptions } from 'ionic-angular';

/**
 * Generated class for the ActionSheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
          public actionSheetCtrl: ActionSheetController) {
  }

  mostraActionSheet = () => {

    let actionSheetOpts : ActionSheetOptions = {
      title: "Opções",
      subTitle: "Opções do Usuario",
      enableBackdropDismiss: false,
      buttons: [
        {
          text: "Excluir",
          icon:"trash",
          role: "destructive"
        },
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: 'Editar',
          icon:"create",
          handler: () => {
            console.log("Editar")
          }
        }
      ]
    };

    //Spread Operator
    actionSheetOpts.buttons = [...actionSheetOpts.buttons,{
      text: "Compartilhar",
      icon:"share",
      handler: () => {
        console.log("Compartilhar");
        return false;
      }
    }]

    const actionSheet = this.actionSheetCtrl.create(actionSheetOpts);
    actionSheet.present();

    setTimeout(() => actionSheet.dismiss(), 3500);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetPage');
  }

}
