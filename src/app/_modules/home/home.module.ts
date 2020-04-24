import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { HomeProductListComponent } from './home-product-list/home-product-list.component';
import { ProductComponent } from './home-product-list/product/product.component';
import { HomeProductDetailComponent } from './home-product-detail/home-product-detail.component';
import { HomeCartComponent } from './home-cart/home-cart.component';
import { Routes, RouterModule } from '@angular/router'

const homeRoute: Routes = [
  {
    path: '', component: HomeTemplateComponent, children: [
      { path: '', component: HomeProductListComponent },
      { path: 'cart', component: HomeCartComponent },
      { path: 'product-detail/:id', component: HomeProductDetailComponent },

    ]
  }
]

@NgModule({
  declarations: [HomeTemplateComponent, HomeProductListComponent, ProductComponent, HomeProductDetailComponent, HomeCartComponent],
  imports: [
    CommonModule,RouterModule.forChild(homeRoute)
  ]
})
export class HomeModule { }
