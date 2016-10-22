import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Project} from '../project/project';
import { ProjectsService } from '../../providers/projects-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ProjectsService]
})
export class HomePage {
  projects;

  constructor(public navCtrl: NavController, public projectsService: ProjectsService) {}

  ionViewDidLoad() {
    this.loadProjects();
  }

  goToProject(projectId) {
    this.navCtrl.push(Project, {id: projectId});
  }

  loadProjects() {
    this.projectsService.allProjects()
      .subscribe(projects => {
        this.projects = projects;
      });
  }
}
