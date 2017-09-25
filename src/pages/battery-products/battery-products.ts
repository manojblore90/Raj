import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the BatteryProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-battery-products',
  templateUrl: 'battery-products.html',
})
export class BatteryProductsPage {

  products = [
    {name: "Lithium ION Batteies",imageUrl: "",ProductDesc:"Solar LED LAntern is an emergency light which gives light equal to an 8W CFL bulb.\n" +
    "It is portable,light weight, sturdy and looks like a traditional lantern.",
      list: [
        {text: "Using latest Li-ion battery technology."},
        {text: "Over charge and deep discharge protection provided."},
        {text: "Charging and battery low indication provided."},
        {text: "Long life of 10 years battery life is minimum 3 years"},
        {text: "Unbreakable body"},
        {text: "Up to 18 hours of backup time"},
        {text: "4 stage dimming"},
        {text: "Flexibility - can be hung upside down also"}

      ]
    },
    {name: "Lithium ION Batteries with Excloser",imageUrl: "",ProductDesc:"It comes with Li-ion battery which can be fitted just below the solar panel and has a long life of 5 years battery, solar panel. (less than 2 kgs) and gets charged within 5 hours during day light. Battery can be upgraded to 36 hrs or more depending on the requirement.",
      list: [
        {}
      ]
    }
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Details(data) {
    this.navCtrl.push('ProductsDetailPage', {data});
  }

}
