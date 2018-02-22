import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/shared/user.service';
import { User } from '../user/shared/user';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-404',
  template: `
    <article class="uw-default">
        <div class="cs-main">
          <div>{{user.userName}}</div>
        </div>
    </article>
  `
})
export class PageNotFoundComponent implements OnInit {
  user: User;
  user$: Observable<User>;
  supportEmail: string;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user$ = this.userService.getUserObservable();

    this.user$.subscribe(user => {
      this.user = user;
    });
  }
}
