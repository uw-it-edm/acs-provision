import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ProgressService} from './shared/providers/progress.service';
import {UserService} from './user/shared/user.service';
import {User} from './user/shared/user';
import {Observable} from 'rxjs/Observable';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {SyncService} from './user/shared/sync.service';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  supportEmail = environment.supportEmail;
  user: User;
  user$: Observable<User>;

  color = 'primary';
  mode = 'indeterminate';
  value = 0;
  loading = false;
  result;

  constructor(
      private changeDetector: ChangeDetectorRef,
      public progressService: ProgressService,
      private syncService: SyncService,
      private userService: UserService) {
    progressService.color$.subscribe(color => {
      this.color = color;
      this.changeDetector.detectChanges();
    });
    progressService.mode$.subscribe(mode => {
      this.mode = mode;
      this.changeDetector.detectChanges();
    });
    progressService.value$.subscribe(value => {
      this.value = value;
      this.changeDetector.detectChanges();
    });
  }

  ngOnInit() {
    this.loading = true;
    this.user$ = this.userService.getUserObservable();

    this.user$.subscribe(user => {
      this.user = user;
      this.loading = false;
      this.syncService.synchronize(user).subscribe((result) => {
        this.result = result;
        this.loading = false;
        if (result) {

        }
      }, (syncError) => {
        this.result = false;
      });
    }, (userError) => {
      this.result = false;
    });
  }
}
