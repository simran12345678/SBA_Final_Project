import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCompanyComponent } from './compare-company.component';
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
import { LineChartComponent } from '../line-chart/line-chart.component';

describe('CompareCompanyComponent', () => {
  let component: CompareCompanyComponent;
  let fixture: ComponentFixture<CompareCompanyComponent>;

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
      declarations: [UserNavComponent,LineChartComponent ,CompareCompanyComponent ],
      providers:[AuthService,UserService,AdminService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
