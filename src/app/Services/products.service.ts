import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

numOfCartIyems:BehaviorSubject<number> = new BehaviorSubject(0);
  BaseUrl: string = "https://ecommerce.routemisr.com"
  constructor(private _HttpClient: HttpClient, private _Router: Router) { 
    this.getCartForUser().subscribe((res)=>{
console.log(res);
this.numOfCartIyems.next(res.numOfCartItems)

    })
  }
  getAllProduct(): Observable<any> {
    return this._HttpClient.get(this.BaseUrl + "/api/v1/products")
  }

  getSpecificProduct(productID: string): Observable<any> {
    return this._HttpClient.get(this.BaseUrl + `/api/v1/products/${productID}`)
  }

  getCategories(): Observable<any> {
    return this._HttpClient.get(this.BaseUrl + '/api/v1/categories')
  }

  addProductToCart(productId: string): Observable<any> {
    return this._HttpClient.post(this.BaseUrl + '/api/v1/cart', { productId: productId }, {
      headers: {
        token: localStorage.getItem('token') || ""
      }
    })
  }

  getCartForUser(): Observable<any> {
    return this._HttpClient.get(this.BaseUrl + '/api/v1/cart', {
      headers: {
        token: localStorage.getItem('token') || ""
      }
    })
  }


  updateProductQuantity(productId: string, productCount: number): Observable<any> {
    return this._HttpClient.put(this.BaseUrl + `/api/v1/cart/${productId}`, {
      count: productCount
    },
      {
        headers: {
          token: localStorage.getItem('token') || ""
        }
      }
    )
  }

  removeProductFromCart(productId:string): Observable<any> {
    return this._HttpClient.delete(this.BaseUrl +`/api/v1/cart/${productId}`, {
      headers: {
        token: localStorage.getItem('token') || ""
      }
    })
  }


  clearCartProduct(): Observable<any>{
    return this._HttpClient.delete(this.BaseUrl +'/api/v1/cart', {
      headers: {
        token: localStorage.getItem('token') || ""
      }
    })
  }

  getAllBrands(): Observable<any>{
return  this._HttpClient.get(this.BaseUrl + `/api/v1/brands`)
  }

  getAllOrders(): Observable<any>{
 return   this._HttpClient.get(this.BaseUrl + `/api/v1/orders`)
  }
}
