import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {EmailComposer} from "@ionic-native/email-composer";

/**
 * Generated class for the EnquiryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enquiry',
  templateUrl: 'enquiry.html',
})
export class EnquiryPage {

  productName = "";
  phoneNumber: string;
  place: string;
  quantity: string;
  name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    const data = this.navParams.get('data');
    this.productName = data;
  }

  sendEmail(productName, name, phone, place, quantity) {
    let email = {
      to: 'avijith.naik@datakue.com',
      cc: 'avijith90naik@gmail.com',
      bcc: ['team.datakue@gmail.com', 'jane@doe.com'],
      attachments: [],
      subject: 'Product Enquiry',
      body: '<p>Product Name: ' + productName + "</p>" +
      '<p>Name: ' + name + '</p>' +
      '<p>Phone Number: ' + phone + '</p>' +
      '<p>Place: ' + place + '</p>' +
      '<p>Quantity: ' + quantity + '</p>',
      isHtml: true
    };
    this.emailComposer.open(email);
  }

}
