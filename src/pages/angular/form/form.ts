import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, FormControl,Validators} from '@angular/forms'
import{CpfValidator} from '../../../validators/cpf'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  
  public cadastro: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public fb : FormBuilder) {
              
    this.cadastro = fb.group({
      email: new FormControl(null,Validators.compose([Validators.email, Validators.required])),
      cpf: new FormControl(null,Validators.compose([Validators.required,CpfValidator.cpfValido])),
      senha: new FormControl(null,Validators.compose([Validators.minLength(6),
                                Validators.maxLength(20),Validators.required]))
    })
        

  }

  salvar = () => console.log(this.cadastro.value);



}
