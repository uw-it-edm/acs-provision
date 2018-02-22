import { async, inject, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { ComponentFixture } from '@angular/core/testing';
import { UserService } from '../user/shared/user.service';
import { Injector } from '@angular/core';
import { User } from '../user/shared/user';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialConfigModule } from './material-config.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  class MockUserService {
    getUserObservable(): Observable<User> {
      const user = new User('testuser');
      const subject = new ReplaySubject<User>();
      subject.next(user);
      return subject;
    }
  }

  class RouterStub {
    navigate(url: string) {
      return url;
    }
  }

  beforeEach(
    async(() => {
      const _mockConfigService = new MockConfigService();
      const _mockUserService = new MockUserService();
      TestBed.configureTestingModule({
        imports: [MaterialConfigModule, NoopAnimationsModule, RouterTestingModule],
        providers: [
          { provide: UserService, useValue: _mockUserService }
        ],
        declarations: [PageNotFoundComponent]
      });
    })
  );

  let mockConfigService: MockConfigService;
  let mockUserService: MockUserService;
  beforeEach(
    inject([Injector], injector => {
      mockUserService = injector.get(UserService);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct support email', () => {
    expect(component.supportEmail).toBe('support@nowhere.com');
  });
});
