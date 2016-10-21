import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganizationsPage } from '../pages/organizations/organizations';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { RepositoryDetailsPage } from '../pages/repository-details/repository-details';
//providers imports
import { GithubUsers } from '../providers/github-users';
import { GithubRepositories } from '../providers/github-repositories';
import { GithubOrganizations } from '../providers/github-organizations';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganizationsPage,
    UserDetailsPage,
    RepositoryDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganizationsPage,
    UserDetailsPage,
    RepositoryDetailsPage
  ],
  providers: [GithubUsers, GithubRepositories, GithubOrganizations] //add GithubUsers to providers
})
export class AppModule {}
