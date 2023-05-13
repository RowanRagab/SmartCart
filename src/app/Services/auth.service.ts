import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterForm } from '../InterFaces/register-form';
import { Observable } from 'rxjs';
import { LoginForm } from './../InterFaces/login-form';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
BaseUrl:string ="https://route-ecommerce-app.vercel.app";
userToken:any;
  constructor(private _HttpClient: HttpClient , private _Router:Router) {
if(localStorage.getItem('token') != null){
  this.userToken = localStorage.getItem('token')
}
  }

  register(rigesterForm:RegisterForm):Observable<any>{
return this._HttpClient.post(this.BaseUrl+"/api/v1/auth/signup", rigesterForm)
  }
  login(loginForm:LoginForm):Observable<any>{
    return this._HttpClient.post(this.BaseUrl+"/api/v1/auth/signin", loginForm)
      }
  
  logOut(){
    localStorage.removeItem("token");
    this.userToken='';
this._Router.navigate(['/home'])
  }
}
