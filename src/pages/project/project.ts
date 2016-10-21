import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Iteration } from '../iteration/iteration';
import { NewIteration }  from '../new-iteration/new-iteration';

import { IterationsService } from '../../providers/iterations-service';
/*
  Generated class for the Project page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
  providers: [IterationsService]
})
export class Project {
  iterations;

  constructor(public navCtrl: NavController, public iterationsService: IterationsService) {}

  ionViewDidLoad() {
    this.loadIterations();
  }

  goToIteration(iterationId){
    this.navCtrl.push(Iteration, {id: iterationId});
  }

  goToNewIteration(){
    this.navCtrl.push(NewIteration);
  }

  loadIterations(){
    this.iterationsService.iterationsByProject()
      .subscribe(data => {
        this.iterations = data;
      });
  }

}
