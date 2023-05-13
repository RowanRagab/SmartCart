import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) {
  }
  
  emptyCartMsg:boolean = false
  cartProducts: any[] = [];
  cart: any;
  countTimeOut: any;
  ngOnInit(): void {
    this._ProductsService.getCartForUser().subscribe((response) => {
      
      // this.cartProducts = response.data.products;
      // this.cart = response.data;
      // console.log(this.cart);
      if(this.cartProducts !== null ){

this.cartProducts = response.data.products;
this.cart = response.data;
      }
      else{
        this.emptyCartMsg = true;
      }
    })
  }

  updateProductQuantity(productId: string, productCount: number) {
    if (productCount == 0) {
      this.removeProductFromCart(productId)
    }
    else {
      clearTimeout(this.countTimeOut)

      this.countTimeOut = setTimeout(() => {
        this._ProductsService.updateProductQuantity(productId, productCount).subscribe((response) => {
          
          this.cartProducts = response.data.products;
          console.log(response.data.products);
          
        })
      }, 500);
    }
  }


  removeProductFromCart(productId: string) {
    this._ProductsService.removeProductFromCart(productId).subscribe((response) => {
      console.log(response);
this._ProductsService.numOfCartIyems.next(response.numOfCartItems)
      this.cartProducts = response.data.products;
    })
  }

  clearCartProduct() {
    this._ProductsService.clearCartProduct().subscribe((response) => {
      console.log(response);
      if(response.message == "success"){
        this._ProductsService.numOfCartIyems.next(0)
        this.emptyCartMsg = true

      }

    })
  }
}
