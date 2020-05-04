import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
     
      ]
    });
    
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('#getDesktopUserEvents should return expected value', () => {
    const fakeData = of({"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInVzZXJUeXBlIjoiYWRtaW4iLCJ1c2VySWQiOiI1ZWExYmYwYjYyYWZiOTAyOTgxNjZjMDYiLCJpYXQiOjE1ODg1NzUwODEsImV4cCI6MTU4ODU3ODY4MX0.SGKDE92p7W9xF9zlE-CEcWhqMQgw4NOczX1HNOUD5Ws"});
    spyOn(service['http'], 'post').and.returnValue(fakeData);
    const thongtin = {
      "email":"admin@gmail.com",
      "password":"123456"
    };
    const result = service.Login(thongtin);
    result.subscribe((values) => {
            expect(values.token).toEqual('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInVzZXJUeXBlIjoiYWRtaW4iLCJ1c2VySWQiOiI1ZWExYmYwYjYyYWZiOTAyOTgxNjZjMDYiLCJpYXQiOjE1ODg1NzUwODEsImV4cCI6MTU4ODU3ODY4MX0.SGKDE92p7W9xF9zlE-CEcWhqMQgw4NOczX1HNOUD5Ws');
        
    });
});


});
