import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient){ }
  
  public Login(thongtin:any):Observable<any> {
    const linkApi= `https://fsoft-app.herokuapp.com/api/user/login`
    const header: HttpHeaders = new HttpHeaders(); // Cho biết định dạng dữ liệu truyền đi
    const observable = this.http.post(linkApi,thongtin)
    return observable;
  }
}
