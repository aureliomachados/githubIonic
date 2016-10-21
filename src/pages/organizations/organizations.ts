import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GithubOrganizations } from '../../providers/github-organizations';
import { Organization } from '../../models/organization';
/*
  Generated class for the Organizations page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-organizations',
  templateUrl: 'organizations.html'
})
export class OrganizationsPage {
  organizations: Organization[];

  constructor(public navCtrl: NavController, private githubOrganizations: GithubOrganizations) {
      this.githubOrganizations.load().subscribe(organizations => {
          this.organizations = organizations;
      });
  }

  ionViewDidLoad() {
    console.log('Hello Organizations Page');
  }

}
