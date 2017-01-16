import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
    masks: any;
 
    phoneNumber: any = "";
    cardNumber: any = "";
    cardExpiry: any = "";
    orderCode: any = "";
 
    constructor(public navCtrl: NavController) {
 
    }
 
    save(){
 
    }
 
}