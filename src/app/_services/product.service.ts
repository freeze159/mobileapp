import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // {headers:{'Authorization':`Bearer ${tokenParse}`,'Content-Type':'application/x-www-form-urlencoded;application/json'}

  constructor(private http:HttpClient){ }
  public GetProductById(id:any){
    const linkApi= `https://fsoft-app.herokuapp.com/api/product/${id}`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    var reqHeader = new HttpHeaders({});
    // console.log(tokenParse);
      // Cho biết định dạng dữ liệu truyền đi
    // header.append('Content-Type','application/x-www-form-urlencoded')
    const observable = this.http.get(linkApi)
    return observable;
  }
  public GetProductList(){
    const linkApi= `https://fsoft-app.herokuapp.com/api/product`;
    const tokenParse = JSON.parse(localStorage.getItem('tokenbearer')); 
    var reqHeader = new HttpHeaders({});
    // console.log(tokenParse);
      // Cho biết định dạng dữ liệu truyền đi
    // header.append('Content-Type','application/x-www-form-urlencoded')
    const observable = this.http.get(linkApi)
    return observable;
  }
  public CreateProduct(data:any){
    const linkApi= `https://fsoft-app.herokuapp.com/api/product`;
    const tokenParse = JSON.parse(localStorage.getItem('token')); 
    var reqHeader = new HttpHeaders({});
    // console.log(tokenParse);
      // Cho biết định dạng dữ liệu truyền đi
    // header.append('Content-Type','application/x-www-form-urlencoded')
    const observable = this.http.post(linkApi,data,{headers:{'token':`${tokenParse}`,'Content-Type':'application/x-www-form-urlencoded;application/json'}})
    return observable;
  }
  
  
}
