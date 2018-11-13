import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LifecyclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lifecycle',
  templateUrl: 'lifecycle.html',
})
export class LifecyclePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  /**
   * Primeiro a ser criando quando a pagina é criada. É executadad apenas uma vez
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad LifecyclePage');
  }

  /**
   * é executado quanda a pagina se torna ativa
   */

  ionViewWillEnter(){
   
  }

  /**
   * torna m execução. sempre executado
   */

  ionViewDidEnter(){
   
  }

  /**
   * executado quando a pagian recebe o comando para deixar de se atual
   */

  ionViewWillLeave(){
   
  }

  /**
   * Executado qdo a pagina deixou de ser atual
   */
  ionViewDidLeave(){
   
  }

  /**
   * Executado quando a pagina é distruida, removida da pilha
   */

   ionViewWillUnload(){
    
   }

   /**
    * É executado ants do didload
    */
   ionViewCanEnter(){
    if(Math.round(Math.random()*10) > 5){
      console.log("Pode entrar");
      return true;}
      else{
        console.log("Não pode entrar");
        return false;
      }
    }
  /**
      * É executado ants do will leave
      */
  ionViewCanLeave() {
    if (Math.round(Math.random() * 10) > 5) {
      console.log("Pode Sair");
      return true;
    }
    else {
      console.log("Não pode Sair");
      return false;
    }
  }
    


   }
