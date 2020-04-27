import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ProductService } from 'src/app/_services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  fileData: File = null;
  constructor(private productS: ProductService,private route:Router) { }
  formData: FormData
  ngOnInit(): void {

  }
  onSubmit(data: any) {
    
    let formData = new FormData()
    formData.append('product', this.fileData, this.fileData.name);
    formData.append('productName',data.productName)
    formData.append('unitPrice',data.unitPrice)
    formData.append('unitInStock',data.unitInStock)
    formData.append('description',data.description)
    formData.append('manufacturer',data.manufacturer)
    formData.append('category',data.category)
    formData.append('conditions',data.conditions)

    
    this.productS.CreateProduct(formData).subscribe(res => {
      console.log(res)
      alert('Product Created')
    })
  }
  logout() {
    localStorage.removeItem('token');
    this.route.navigateByUrl('/')
  }
  onFileChange(event) {
    
    this.fileData = <File>event.target.files[0];
    console.log(this.fileData)
    // this.formData = new FormData()
    // this.formData.set('product', this.fileData, this.fileData.name);


  }
}
