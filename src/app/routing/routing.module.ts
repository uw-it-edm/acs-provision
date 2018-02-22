import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { UserService } from '../user/shared/user.service';
import { MaterialConfigModule } from './material-config.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { AppComponent } from '../app.component';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';
import { HttpClientModule } from '@angular/common/http';
import {PageNotFoundComponent} from './page-not-found.component';
import {AuthGardService} from './shared/auth-gard.service';
import {LoginComponent} from '../user/login/login.component';

let enableRouterTracing = true;
if (environment.production) {
  enableRouterTracing = false;
}

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [AuthGardService]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: enableRouterTracing } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialConfigModule,
    HttpClientModule,
    SharedModule,
    UserModule
  ],
  declarations: [AppComponent, PageNotFoundComponent],
  exports: [RouterModule],
  providers: [AuthGardService, UserService]
})
export class RoutingModule {}
