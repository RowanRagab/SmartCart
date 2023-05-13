import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  isLoading:boolean = false
  allCategories:any;
constructor(private _HttpClient:HttpClient , private _ProductsServices:ProductsService){
  this.isLoading =true;
  _ProductsServices.getCategories().subscribe((categories)=>{
  this.allCategories= categories.data;
  this.isLoading=false
  })
}


}
