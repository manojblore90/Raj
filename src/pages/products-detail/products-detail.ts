import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ProductsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products-detail',
  templateUrl: 'products-detail.html',
})
export class ProductsDetailPage {

  info: any;
  name = "";
  desc = "";
  image = "";
  lists: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.navParams.get('data');
    this.info = this.navParams.get('data');
    this.name = this.info.name;
    this.desc = this.info.ProductDesc;
    this.image = this.info.image;
    this.lists = this.info.list;
    // console.log(this.info.list);
  }

  Enquiry(data){
    this.navCtrl.push('EnquiryPage',{data});
  }

}
