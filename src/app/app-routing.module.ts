import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SellerAccountEditComponent } from './components/seller/seller-account-edit/seller-account-edit.component';
import { SellerAccountComponent } from './components/seller/seller-account/seller-account.component';
import { SellerAddProductComponent } from './components/seller/seller-add-product/seller-add-product.component';
import { SellerEditProductComponent } from './components/seller/seller-edit-product/seller-edit-product.component';
import { SellerHomeComponent } from './components/seller/seller-home/seller-home.component';
import { SellerManageOrdersComponent } from './components/seller/seller-manage-orders/seller-manage-orders.component';
import { SellerManageProductsComponent } from './components/seller/seller-manage-products/seller-manage-products.component';
import { SellerViewOrderComponent } from './components/seller/seller-view-order/seller-view-order.component';
import { SellerViewProductComponent } from './components/seller/seller-view-product/seller-view-product.component';
import { SignupComponent } from './components/signup/signup.component';
import { AccountEditComponent } from './components/user/account-edit/account-edit.component';
import { AccountComponent } from './components/user/account/account.component';
import { CartsComponent } from './components/user/carts/carts.component';
import { OrdersComponent } from './components/user/orders/orders.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { UserProductDetailsComponent } from './components/user/user-product-details/user-product-details.component';

const routes: Routes = [
  { path: '', component: MainSectionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'product-details/:id', component:ProductDetailsComponent},
  {
    path: 'user',
    children: [
      { path:'',component: UserHomeComponent },
      { path: 'account', component: AccountComponent },
      { path:'account/edit/:id',component:AccountEditComponent},
      { path: 'orders', component: OrdersComponent },
      { path: 'carts', component: CartsComponent },
      {path: 'product-details/:id', component:UserProductDetailsComponent},
    ]
  },
  {
    path: 'seller',
    children: [
      { path:'',component: SellerHomeComponent },
      { path:'account',component:SellerAccountComponent},
      { path:'account/edit/:id',component:SellerAccountEditComponent},
      { path: 'manage-orders', component: SellerManageOrdersComponent },
      { path: 'view-order/:id', component: SellerViewOrderComponent },
      { path: 'add-product', component: SellerAddProductComponent },
      { path: 'manage-products', component: SellerManageProductsComponent },
      { path: 'view-product/:id', component: SellerViewProductComponent },
      { path: 'edit-product/:id', component: SellerEditProductComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
