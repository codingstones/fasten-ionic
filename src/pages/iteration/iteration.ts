import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Iteration page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-iteration',
  templateUrl: 'iteration.html'
})
export class Iteration {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Iteration Page');
  }

}
