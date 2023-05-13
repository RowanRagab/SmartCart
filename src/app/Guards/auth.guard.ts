import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _Router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('token') != null){
        try {
          jwtDecode(localStorage.getItem('token') || "")
          return true
        } catch (error) {
          localStorage.removeItem('token')
          this._Router.navigate(['/home'])
          return false
        }
      }
      else{
        this._Router.navigate(["/home"])
        return false}
  }
  
}
