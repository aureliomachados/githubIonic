import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Repository } from '../../models/repository';
import { GithubRepositories } from '../../providers/github-repositories';

/*
  Generated class for the RepositoryDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-repository-details',
  templateUrl: 'repository-details.html'
})
export class RepositoryDetailsPage {
  repository: Repository;
  id: number;
  constructor(public navCtrl: NavController, private navParams: NavParams, private githubRepositories: GithubRepositories) {
    this.id = navParams.get('id');

    githubRepositories.loadById(this.id).subscribe(repository => {
      this.repository = repository;
    })

  }

  ionViewDidLoad() {
    console.log('Hello RepositoryDetails Page');
  }

}
