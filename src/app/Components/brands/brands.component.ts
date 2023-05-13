import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
constructor(private _ProductsService:ProductsService){}
isLoading:boolean = false;
brands:any[] = []
ngOnInit(){
  this.isLoading = true;
this._ProductsService.getAllBrands().subscribe({
  
  next:(res)=>{
    console.log(res.data);
    this.brands=res.data
    this.isLoading = false
  }
})
}
}
