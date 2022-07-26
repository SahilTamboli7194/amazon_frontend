import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { OrdersComponent } from './components/user/orders/orders.component';
import { CartsComponent } from './components/user/carts/carts.component';
import { AccountComponent } from './components/user/account/account.component';
import { NavbarComponent } from './components/user/navbar/navbar.component';
import { SellernavbarComponent } from './components/seller/sellernavbar/sellernavbar.component';
import { SellerAccountComponent } from './components/seller/seller-account/seller-account.component';
import { SellerAddProductComponent } from './components/seller/seller-add-product/seller-add-product.component';
import { SellerViewProductComponent } from './components/seller/seller-view-product/seller-view-product.component';
import { SellerEditProductComponent } from './components/seller/seller-edit-product/seller-edit-product.component';
import { SellerManageProductsComponent } from './components/seller/seller-manage-products/seller-manage-products.component';
import { SellerManageOrdersComponent } from './components/seller/seller-manage-orders/seller-manage-orders.component';
import { SellerViewOrderComponent } from './components/seller/seller-view-order/seller-view-order.component';
import { SellerHomeComponent } from './components/seller/seller-home/seller-home.component';
import { SellerAccountEditComponent } from './components/seller/seller-account-edit/seller-account-edit.component';
import { AccountEditComponent } from './components/user/account-edit/account-edit.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserProductDetailsComponent } from './components/user/user-product-details/user-product-details.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainSectionComponent,
    LoginComponent,
    SignupComponent,
    UserHomeComponent,
    OrdersComponent,
    CartsComponent,
    AccountComponent,
    NavbarComponent,
    SellernavbarComponent,
    SellerAccountComponent,
    SellerAddProductComponent,
    SellerViewProductComponent,
    SellerEditProductComponent,
    SellerManageProductsComponent,
    SellerManageOrdersComponent,
    SellerViewOrderComponent,
    SellerHomeComponent,
    SellerAccountEditComponent,
    AccountEditComponent,
    ProductDetailsComponent,
    UserProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
