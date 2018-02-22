import { Injectable } from '@angular/core';
import { User } from './user';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProgressService } from '../../shared/providers/progress.service';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { NotificationService } from '../../shared/providers/notification.service';

@Injectable()
export class SyncService {
  private baseUrl: string = environment.sync_api.url + environment.sync_api.context;

  constructor(
      private http: HttpClient,
      private progressService: ProgressService,
      private notificationService: NotificationService
  ) {}

  synchronize(user: User): Observable<boolean> {
    const options = this.buildRequestOptions();
    if (this.progressService != null) {
      this.progressService.start('query');
    }
    const body = {
        netId: user.userName
    };
    return this.http.post<boolean>(this.baseUrl, body, options);
  }

  private buildRequestOptions() {
    const requestOptionsArgs = {};
    if (environment.sync_api.authenticationHeader && environment.testUser) {
      requestOptionsArgs['headers'] = new HttpHeaders().append(
          environment.sync_api.authenticationHeader,
          environment.testUser
      );
    }
    return requestOptionsArgs;
  }
}
