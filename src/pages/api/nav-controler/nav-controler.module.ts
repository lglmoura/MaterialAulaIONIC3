import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavControlerPage } from './nav-controler';

@NgModule({
  declarations: [
    NavControlerPage,
  ],
  imports: [
    IonicPageModule.forChild(NavControlerPage),
  ],
})
export class NavControlerPageModule {}
