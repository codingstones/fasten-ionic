import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
//import { IterationsService } from '../../providers/iterations-service';
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
  id;
  iteration;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.id = navParams.get('id');
  }

  ionViewWillEnter() {
    
  }

}
