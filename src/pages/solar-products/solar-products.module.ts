import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolarProductsPage } from './solar-products';

@NgModule({
  declarations: [
    SolarProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(SolarProductsPage),
  ],
})
export class SolarProductsPageModule {}
