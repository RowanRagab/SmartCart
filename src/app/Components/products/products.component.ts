import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  isLoading:boolean=false;

  searchTerm:string ='';
  products: any[] = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }

  constructor(private _ProductsService: ProductsService , private _Router:Router) {
    if(localStorage.getItem('token') == null){
      _Router.navigate(['/home'])
    }
this.isLoading= true
    this._ProductsService.getAllProduct().subscribe((products) => {
      this.products = products.data;
      console.log(this.products);
      this.isLoading= false
    })
  }

  addProductToCart(productId:string){
    this._ProductsService.addProductToCart(productId).subscribe((response)=>{
      console.log(response);
      this._ProductsService.numOfCartIyems.next(response.numOfCartItems)
      
    })
  }
}
