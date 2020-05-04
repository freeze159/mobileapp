import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductComponent } from './create-product.component';
import { HttpClient } from '@angular/common/http';




import { ProductService } from 'src/app/_services/product.service'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing'
import { of } from 'rxjs';
import { Input } from '@angular/core';

describe('CreateProductComponent', () => {
  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;
  let productS: ProductService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProductComponent],
      imports: [
        HttpClientModule, FormsModule, RouterTestingModule

      ],
      providers: [ProductService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductComponent);
    component = fixture.componentInstance;
    productS = TestBed.get(ProductService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('onSubmit product', () => {
    // Given
    let thongtin = {
      "productName": "Ipx",
      "unitPrice": 1000,
      "unitInStock": 100,
      "description": "aaa",
      "manufacturer": "Apple",
      "category": "Cate",
      "conditions": "New",

    }
    component.fileData = new File([""], "gaugau", {type: "text/plain", lastModified: Date.now()})
      

    let fakeReturnData = { "_id": "5eafce2550825c0017243c22", "productName": "Ipx", "unitPrice": 1000, "unitInStock": 100, "description": "1212", "manufacturer": "12", "category": "12", "conditions": "new", "__v": 0, "image": "http://res.cloudinary.com/fsoft-fresher/image/upload/v1588579879/ip7wci2um4z3nqfrieps.jpg" }
    spyOn(productS, 'CreateProduct').and.returnValue(of({
      fakeReturnData
    }));
    // spyOn(component as any, 'changeUserEvent');

    // Action
    component.onSubmit(thongtin);

    // Expect
    expect(thongtin.productName).toEqual(fakeReturnData.productName)
  });
  it('onfilechange product',()=>{
    let event = {
      target:{files:new Array(new File([""], "gaugau", {type: "text/plain", lastModified: Date.now()}))}
    }
    console.log(event)
    //Action
    component.onFileChange(event)
    //
    expect(component.fileData.name).toEqual(event.target.files[0].name)
  })

});
