import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentsService } from 'src/app/Services/payments.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit{
  // error:any = null
  constructor(private _PaymentsService:PaymentsService ,private _Router:Router ,
    private _ProductsService: ProductsService){}
  shippingAddress:FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null)
  });

navigateToAllorders(url:string){
  window.location.href = url
  }
cartId:any;
ngOnInit(){
  this._ProductsService.getCartForUser().subscribe((response) => {
    console.log(response.data._id);
    this.cartId=response.data._id
  })
}
  handleShippingAddress(){
    console.log(this.shippingAddress.value);
    this._PaymentsService.onlinePayment(this.shippingAddress.value, this.cartId).subscribe({
      next:(res)=>{
        console.log(res);
        console.log(res.session.url);
        if(res.status === 'success'){
          this.navigateToAllorders(res.session.url)
        }
        
      },
      error:(err)=>{
        console.log(err);
        // this.error=err
        
      }

    })
  }


}
