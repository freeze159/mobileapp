import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { UserService } from 'src/app/_services/user.service'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing'
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let service: UserService
  let fixture: ComponentFixture<LoginComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        HttpClientModule,RouterTestingModule,FormsModule
     
      ],
      providers: [UserService, { provide: Router, useValue: mockRouter}]
      
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.get(UserService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('method login', () => {
    // Given
    const fakeData = of({"message":"Login successfully","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInVzZXJUeXBlIjoiYWRtaW4iLCJ1c2VySWQiOiI1ZWExYmYwYjYyYWZiOTAyOTgxNjZjMDYiLCJpYXQiOjE1ODg1Nzc0NDMsImV4cCI6MTU4ODU4MTA0M30.t-PI81WFxMbHEReyti21JBLEjuJbMpJ_KeeCMGl6Yjg"});
    
    spyOn(service, 'Login').and.returnValue(fakeData);

    // spyOn(treatmentService['httpClient'], 'delete').and.returnValue(of({
    //   CustomerEventId: component.currentUserEvent.id
    // }));
    // spyOn(component as any, 'changeUserEvent');
 
    // Action
    let data ={
      "email":"admin@gmail.com",
      "password":"123456"
    }
    component.Login(data)
 
    // Expect
    expect(localStorage.getItem('token')).toEqual('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInVzZXJUeXBlIjoiYWRtaW4iLCJ1c2VySWQiOiI1ZWExYmYwYjYyYWZiOTAyOTgxNjZjMDYiLCJpYXQiOjE1ODg1Nzc0NDMsImV4cCI6MTU4ODU4MTA0M30.t-PI81WFxMbHEReyti21JBLEjuJbMpJ_KeeCMGl6Yjg');
    expect (mockRouter.navigate).toHaveBeenCalledWith (['create-product']);
  });
});
