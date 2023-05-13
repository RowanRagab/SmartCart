import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductsComponent } from './Components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './Components/categories/categories.component';
import { SpesificProductComponent } from './Components/spesific-product/spesific-product.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SpesificCategoryComponent } from './Components/spesific-category/spesific-category.component';
import { CartComponent } from './Components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RigesterComponent } from './Components/rigester/rigester.component';
import { LoginComponent } from './Components/login/login.component';
import { SearchByProductNamePipe } from './Pipes/search-by-product-name.pipe';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { AlloredersComponent } from './Components/alloreders/alloreders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    CategoriesComponent,
    SpesificProductComponent,
    SpesificCategoryComponent,
    CartComponent,
    RigesterComponent,
    LoginComponent,
    SearchByProductNamePipe,
    CheckOutComponent,
    BrandsComponent,
    AlloredersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
