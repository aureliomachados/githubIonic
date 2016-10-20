import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { RepositoryDetailsPage } from '../pages/repository-details/repository-details';
//providers imports
import { GithubUsers } from '../providers/github-users';
import { GithubRepositories } from '../providers/github-repositories';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganisationsPage,
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
    OrganisationsPage,
    UserDetailsPage,
    RepositoryDetailsPage
  ],
  providers: [GithubUsers, GithubRepositories] //add GithubUsers to providers
})
export class AppModule {}
