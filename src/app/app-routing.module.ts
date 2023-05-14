import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { SpesificProductComponent } from './Components/spesific-product/spesific-product.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CartComponent } from './Components/cart/cart.component';
import { RigesterComponent } from './Components/rigester/rigester.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './Guards/auth.guard';
import { BrandsComponent } from './Components/brands/brands.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { AlloredersComponent } from './Components/alloreders/alloreders.component';
const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"signup" , component:RigesterComponent},
  {path:"login" , component:LoginComponent},
  {path:"products" , canActivate:[AuthGuard] , component:ProductsComponent},
  {path:"brands" , canActivate:[AuthGuard] , component:BrandsComponent},
  {path:"categories" , canActivate:[AuthGuard] , component:CategoriesComponent},
  {path:"product/:id" , canActivate:[AuthGuard] , component:SpesificProductComponent},
  {path:"cart" , canActivate:[AuthGuard] , component:CartComponent},
  {path:"allorders" , canActivate:[AuthGuard] , component:AlloredersComponent},
  {path:"checkOut" , canActivate:[AuthGuard] , component:CheckOutComponent},
  {path:"**" , component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:false}) ],
exports: [RouterModule]
})
export class AppRoutingModule { }
