import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Iteration } from '../iteration/iteration';

/*
  Generated class for the Project page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-project',
  templateUrl: 'project.html'
})
export class Project {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Project Page');
  }

  goToIteration(){
    this.navCtrl.push(Iteration);
  }

}
