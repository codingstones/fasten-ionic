import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Iteration } from '../iteration/iteration';
import { NewIteration }  from '../new-iteration/new-iteration';

import { ProjectsService } from '../../providers/projects-service';
/*
  Generated class for the Project page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
  providers: [ProjectsService]
})
export class Project {
  project;
  id;

  constructor(public navCtrl: NavController, public projectsService: ProjectsService, private navParams: NavParams) {
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    this.loadProject(this.id);
  }

  goToIteration(iterationId){
    this.navCtrl.push(Iteration, {id: iterationId});
  }

  goToNewIteration(){
    this.navCtrl.push(NewIteration);
  }

  loadProject(projectId){
    this.projectsService.projectById(this.id)
      .subscribe( project => {
        this.project = project;
      });
  }

}
