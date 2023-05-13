import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators} from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { RegisterForm } from './../../InterFaces/register-form';
import { retry } from 'rxjs';

@Component({
  selector: 'app-rigester',
  templateUrl: './rigester.component.html',
  styleUrls: ['./rigester.component.css']
})
export class RigesterComponent {
  isLoading:boolean =false;

constructor(private _AuthService:AuthService ,private _Router:Router){
  if(localStorage.getItem('token') != null){
    _Router.navigate(['/products'])
  }
}

registerForm:FormGroup = new FormGroup({
  name : new FormControl(null,[Validators.required , Validators.minLength(3) , Validators.maxLength(20), Validators.pattern(/^[A-Z]{1}[a-z | A-Z]{0,19}$/)] ),
  email : new FormControl(null,[Validators.required , Validators.email]),
  password : new FormControl(null,[Validators.required , Validators.minLength(6) , Validators.maxLength(30)]),
  rePassword : new FormControl(null,[Validators.required,  Validators.minLength(6) , Validators.maxLength(30)]),
  phone : new FormControl(null,[Validators.required , Validators.pattern(/^01[0125]{1}[0-9]{8}$/)]),
  
}, {validators: this.passwordMatch}
)

// pass and rePass match
passwordMatch(registerForm:any){
  let passControl = registerForm.get("password");
  let repassControl = registerForm.get("rePassword");
  if(passControl.value === repassControl.value){
    return null;
  }
  else{
    repassControl.setErrors({prasswordmatch: "password doesn't match"})
    return {prasswordmatch: "password doesn't match"}
  }
}

errorMsg:any;
register(){
  this.isLoading=true

  console.log(this.registerForm.value);
  this._AuthService.register(this.registerForm.value).subscribe({
    next:(response)=>{
      if(response.message == "success"){
        this._Router.navigate(['/login'])
      }
      
    },
    error:(err)=>{
      this.errorMsg = err.error.message;
      this.isLoading = false

    }
  })
}

}

