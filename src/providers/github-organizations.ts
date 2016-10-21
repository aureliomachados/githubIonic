import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Organization } from '../models/organization';

/*
  Generated class for the GithubOrganizations provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubOrganizations {

    //dependency injection
  constructor(public http: Http) {}

    //busca as organizações
    load(): Observable<Organization[]> {
        return this.http.get('https://api.github.com/organizations').map(res => <Organization[]>res.json())
    }

    //busca uma organização pelo id
    findById(id: number): Observable<Organization> {
        return this.http.get('https://api.github.com/organizations/' + id).map(res => <Organization>res.json())
    }


}
