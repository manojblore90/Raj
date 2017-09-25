import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from "@ionic-native/email-composer";

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
  phoneNumber:string;
  place:string;
  quantity:string;
  name:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('data'));
    // this.sendEmail();
    const data = this.navParams.get('data');
    console.log(data);
    this.productName = data;
    console.log(this.phoneNumber);
  }

  sendEmail(productName,name,phone,place,quantity)
  {
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        let email = {
          to: 'avijith.naik@datakue.com',
          cc: 'avijith90naik@gmail.com',
          bcc: ['team.datakue@gmail.com', 'jane@doe.com'],
          attachments: [
            'file://img/logo.png',
            'res://icon.png',
            'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
            'file://README.pdf'
          ],
          subject: 'Cordova Icons',
          body: 'Product Name: '+ productName +'\n' +
          'Name: '+name+'\n'+
          'Phone Number: '+phone+'\n'+
          'Place: '+place+'\n'+
          'Quantity: '+quantity+'\n',
          isHtml: true
        };

        this.emailComposer.open(email);
      }
    });
  }

}
