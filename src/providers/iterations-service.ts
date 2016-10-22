import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import fasten from 'fasten-core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class IterationsService {

  constructor(public http: Http) { }

  iterationsByProject() {
    let promise = fasten.ProjectService.allProjects();
    return Observable.fromPromise(promise);
  }

  iterationById(id) {
    let promise = fasten.ProjectService.findById(id);
    return Observable.fromPromise(promise);
  }

  createIteration(data){
    console.log('TO IMPLEMENT');
  }

}
