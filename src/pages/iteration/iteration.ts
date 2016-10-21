import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { IterationsService } from '../../providers/iterations-service';
/*
  Generated class for the Iteration page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-iteration',
  templateUrl: 'iteration.html',
  providers: [IterationsService]
})
export class Iteration {
  id;
  iteration;

  constructor(public navCtrl: NavController, private navParams: NavParams, public iterationsService: IterationsService) {
    this.id = navParams.get('id');
  }

  ionViewWillEnter() {
    console.log('Hello Iteration Page '+ this.id);
    this.iterationsService.iterationById(this.id)
      .subscribe( iteration => {
        console.log(iteration)
        this.iteration = iteration;
      });
  }

}
