import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GithubRepositories } from '../../providers/github-repositories';
import { Repository } from '../../models/repository' ;
import { LoadingController } from 'ionic-angular';
import { RepositoryDetailsPage } from '../repository-details/repository-details';
/*
  Generated class for the Repos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {
  repositories: Repository[];

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, private githubRepositories: GithubRepositories) {
    let loading = loadingCtrl.create({content: "Aguarde..."});
    loading.present();

    githubRepositories.load().subscribe(repositories => {
      this.repositories = repositories;
      loading.dismiss();
    });
  }

  goToDetails(id: number){
    this.navCtrl.push(RepositoryDetailsPage, {id});
  }

  ionViewDidLoad() {
    console.log('Hello Repos Page');
  }

}
