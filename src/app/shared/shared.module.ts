import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialConfigModule } from '../routing/material-config.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './providers/data.service';
import { ProgressService } from './providers/progress.service';
import { NotificationService } from './providers/notification.service';
import {NotificationComponent} from './widgets/notification/notification.component';

@NgModule({
  imports: [CommonModule, MaterialConfigModule, RouterModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    MaterialConfigModule,
    RouterModule
  ],
  declarations: [
    NotificationComponent
  ],
  providers: [DataService, ProgressService, NotificationService],
  entryComponents: [
    NotificationComponent
  ]
})
export class SharedModule {}
