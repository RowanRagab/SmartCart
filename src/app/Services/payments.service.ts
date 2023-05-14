import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private _HttpClient:HttpClient) { }
  onlinePayment(shippingAddress:any , cartId:string):Observable<any>{
return this._HttpClient.post(`https://route-ecommerce-app.vercel.app/api/v1/orders/checkout-session/${cartId}?url=https://smart-cart-pivy.vercel.app`,
{
  shippingAddress:shippingAddress
},
{
  headers: {
    token: localStorage.getItem('token') || ""
  }
})
  }
}
