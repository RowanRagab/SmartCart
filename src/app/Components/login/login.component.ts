import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading:boolean =false;
    constructor(private _AuthService:AuthService , private _Router:Router){
    if(localStorage.getItem('token') != null){
      _Router.navigate(['/products'])
    }
  }

  loginForm:FormGroup = new FormGroup({
    email : new FormControl(null,[Validators.required , Validators.email]),
    password : new FormControl(null,[Validators.required , Validators.minLength(6) , Validators.maxLength(30)])
  }
  )
  errorMsg:any;
  login(){
    this.isLoading=true
    console.log(this.loginForm.value);
    this._AuthService.login(this.loginForm.value).subscribe({
      next:(response)=>{
        if(response.message == "success"){
          localStorage.setItem('token', response.token);
          this._AuthService.userToken =  response.token;
          this._Router.navigate(['/products'])
        }
      },
      error:(err)=>{
      this.errorMsg =err.error.message;
      this.isLoading = false
      }
    })
  }
}
