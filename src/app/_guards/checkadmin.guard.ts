import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {jwt} from 'jwt'
@Injectable({
  providedIn: 'root'
})
export class CheckadminGuard implements CanActivate {
  constructor(private atv:ActivatedRoute) {
    
    
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(JSON.parse(localStorage.getItem('token')).data.level_id){

    }
    return true;
  }
  
}
