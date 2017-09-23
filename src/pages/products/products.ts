import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {


  products = [
  {name: "Solar Products"},
  {name: "Lithium Ion Battery"}
];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pageNav(data){
    if(data == "Solar Products"){
      this.navCtrl.push('SolarProductsPage');
    }
    else{
      this.navCtrl.push('BatteryProductsPage');
    }
  }

}
