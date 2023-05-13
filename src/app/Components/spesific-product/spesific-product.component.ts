import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-spesific-product',
  templateUrl: './spesific-product.component.html',
  styleUrls: ['./spesific-product.component.css']
})
export class SpesificProductComponent {
  productID:any;
  specificProduct:any;

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

  
constructor(private _ActivatedRoute:ActivatedRoute , private _ProductServices:ProductsService){
_ActivatedRoute.paramMap.subscribe((params)=>{
  this.productID =params.get('id');
  _ProductServices.getSpecificProduct(this.productID).subscribe((product)=>{
this.specificProduct = product.data
  })
})
}


addProductToCart(productId:string){
  this._ProductServices.addProductToCart(productId).subscribe((response)=>{
    console.log(response);
this._ProductServices.numOfCartIyems.next(response.numOfCartItems)
    
  })
}
}

