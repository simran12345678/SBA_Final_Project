import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http' 

import { AppRoutingModule } from '../../app-routing.module';
import { AuthService } from '../../auth.service';
import { FormsModule } from '@angular/forms';
import { AdminLandingComponent } from '../../Admin/admin-landing/admin-landing.component';
import { AdminNavComponent } from '../../Admin/admin-nav/admin-nav.component';
import { UserService } from 'src/app/User/user.service';
import { AdminService } from 'src/app/Admin/admin.service';
import { ChartsModule } from 'ng2-charts';
import { RouterTestingModule } from '@angular/router/testing';


describe('AdminLandingComponent', () => {
  let component: AdminLandingComponent;
  let fixture: ComponentFixture<AdminLandingComponent>;

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
      declarations: [AdminNavComponent, AdminLandingComponent ],
      providers:[AuthService,UserService,AdminService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
