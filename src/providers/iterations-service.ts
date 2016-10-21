import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the IterationsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class IterationsService {

  constructor(public http: Http) {
    console.log('Hello IterationsService Provider');
  }

  iterationsByProject() {
    return this.http.get('https://fasten-backend.herokuapp.com/iterations')
      .map(res => res.json());
  }

  iterationById(id) {
    return this.http.get(`https://fasten-backend.herokuapp.com/iterations/${id}`)
      .map(res => res.json());
  }

}
