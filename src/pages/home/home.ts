import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Project} from '../project/project';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToProject() {
    this.navCtrl.push(Project);
  }

}
