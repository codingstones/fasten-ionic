import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import fasten from 'fasten-core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProjectsService {

  constructor(public http: Http) { }

  allProjects() {
    let promise = fasten.ProjectService.allProjects();
    return Observable.fromPromise(promise);
  }

  projectById(id) {
    let promise = fasten.ProjectService.findById(id);
    return Observable.fromPromise(promise);
  }

  createIteration(data){
    console.log('TO IMPLEMENT');
  }

}
