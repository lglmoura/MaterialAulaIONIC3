import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalTestePage } from './modal-teste';

@NgModule({
  declarations: [
    ModalTestePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalTestePage),
  ],
})
export class ModalTestePageModule {}
