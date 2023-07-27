import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private _HttpClient:HttpClient) { }
  onlinePayment(shippingAddress:any , cartId:string):Observable<any>{
return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://route-ecommerce-app.vercel.app`,
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
