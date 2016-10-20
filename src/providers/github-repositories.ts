import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Repository } from '../models/repository';

/*
  Generated class for the GithubRepositories provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubRepositories {

  constructor(public http: Http) {
    console.log('Hello GithubRepositories Provider');
  }

}
