import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminTemplateComponent } from './admin-template/admin-template.component'
import { FormBuilder, FormGroup,FormsModule } from '@angular/forms';
const admin: Routes = [
  {
    path: '', component: AdminTemplateComponent, children: [
      { path: '', component: LoginComponent },
      { path: 'create-product', component: CreateProductComponent }
    ]
  }

]

@NgModule({
  declarations: [LoginComponent, CreateProductComponent, AdminTemplateComponent],
  imports: [
    CommonModule, RouterModule.forChild(admin),FormsModule
  ]
})
export class AdminModule { }
