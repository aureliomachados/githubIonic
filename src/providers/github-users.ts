import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { User } from '../models/user';

/*
  Generated class for the GithubUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubUsers {
  //githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) {}

  //load all github users
  load(): Observable<User[]> {
    return this.http.get('https://api.github.com/users').map(res => <User[]>res.json());
  }

  // Get github user by providing login(username)
  loadDetails(login: string): Observable<User> {
    return this.http.get('https://api.github.com/users/' + login)
      .map(res => <User>(res.json()))
  }

  searchUsers(searchParams: string): Observable<User[]>{
    return this.http.get('https://api.github.com/search/users?q=' + searchParams).map(res => <User[]>(res.json().items))
  }

}
