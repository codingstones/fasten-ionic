import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the NewIteration page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-new-iteration',
  templateUrl: 'new-iteration.html'
})
export class NewIteration {
  iteration;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    this.iteration = {'name':'Iteration N'}
  }

  create(){
    console.log(this.iteration)
  }

}
