import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-alloreders',
  templateUrl: './alloreders.component.html',
  styleUrls: ['./alloreders.component.css']
})
export class AlloredersComponent implements OnInit{
  orders:any;
constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void {
   this._ProductsService.getAllOrders().subscribe({
    next:(res)=>{
      this.orders = res.data
      console.log(this.orders);
    }
})
  }

}
