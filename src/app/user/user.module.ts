import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './shared/user.service';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import {SyncService} from './shared/sync.service';

@NgModule({
  imports: [SharedModule, RouterModule],
  exports: [],
  declarations: [LoginComponent],
  providers: [SyncService, UserService]
})
export class UserModule {}
