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

  constructor(public http: Http) {}

  //load first repositories
  load(): Observable<Repository[]> {
    return this.http.get('https://api.github.com/repositories').map(res => <Repository[]>res.json())
  }

  loadById(id: number): Observable<Repository> {
    return this.http.get('http://api.github.com/repositories/' + id).map(res => <Repository>res.json())
  }

  //load repositories of an especific user
  loadByUser(username: string): Observable<Repository[]> {
    return this.http.get('https://api.github.com/users/' + username + '/repos').map(res => <Repository[]>res.json())
  }

}
