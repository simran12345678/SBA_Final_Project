import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLandingComponent } from './user-landing.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { AuthService } from 'src/app/auth.service';
import { UserService } from '../user.service';
import { AdminService } from 'src/app/Admin/admin.service';
import { UserNavComponent } from '../user-nav/user-nav.component';

describe('UserLandingComponent', () => {
  let component: UserLandingComponent;
  let fixture: ComponentFixture<UserLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
      ],
      declarations: [ UserNavComponent,UserLandingComponent ],
      providers:[AuthService,UserService,AdminService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
