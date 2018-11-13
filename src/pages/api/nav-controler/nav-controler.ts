import { ButtonsPage } from './../../components/buttons/buttons';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NavControlerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nav-controler',
  templateUrl: 'nav-controler.html',
})
export class NavControlerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.navCtrl.getActive());
    console.log(this.navCtrl.getActive().index);
  }
  
  irPorPush = () =>  this.navCtrl.push("ButtonsPage");
 

  irPorSetroot = () => this.navCtrl.setRoot("ButtonsPage");
  
  /**
   * Retira todoas a paginas da pilha vai para a página root atual
   */

  poptoRoot = () => this.navCtrl.popToRoot();

  /**
   * Ele dispilha seguidamente todas as views da pilha
   */

   popAll = () => this.navCtrl.popAll();


   /**
    * Inserir uma pagina 
    */
   insert = () =>{
     this.navCtrl.insert(1,"ButtonsPage");
   }
    
   /**
    * Inseri varias paginas
    */
   insertPages = () =>{
     this.navCtrl.insertPages(1,[{page: "ButtonsPage"},{page:"BindingPage"}])
   }


   /**
    * Remove a quantidade de paguina desejada a ártir de um index
    */
   remove = () =>{
     this.navCtrl.remove(1,1);

   }

   /**
    * returna boolean se o usuario pode voltar ou não pilha
    */
   candoback = () =>{
     this.navCtrl.canGoBack();

   }

}
