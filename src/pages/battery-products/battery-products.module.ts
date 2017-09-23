import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BatteryProductsPage } from './battery-products';

@NgModule({
  declarations: [
    BatteryProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(BatteryProductsPage),
  ],
})
export class BatteryProductsPageModule {}
