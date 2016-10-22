import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  project;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.project = this.navParams.get('project');
    this.iteration = {'name':'Iteration N'}
  }

  create(){
    console.log(this.iteration)
  }

}
