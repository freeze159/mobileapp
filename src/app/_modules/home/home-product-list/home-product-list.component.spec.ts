import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductListComponent } from './home-product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from 'src/app/_services/product.service';
import { ProductComponent } from './product/product.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';

describe('HomeProductListComponent', () => {
  let component: HomeProductListComponent;
  let fixture: ComponentFixture<HomeProductListComponent>;
  let service:ProductService
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProductListComponent,ProductComponent ],
      imports: [
        HttpClientModule
     
      ],
      providers:[ProductService]
    })
    .compileComponents();
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductListComponent);
    component = fixture.componentInstance;
    service=TestBed.get(ProductService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render',()=>{
    let fakereturndata = of([{"_id":"5ea69487db45100017bbc50c","productName":"iPhoneX","unitPrice":999,"unitInStock":150,"description":"Super phone 2020 destroy humankind.","manufacturer":"Apple","category":"Smartphone","conditions":"new","__v":0,"image":"http://res.cloudinary.com/fsoft-fresher/image/upload/v1587975304/tko2ruxy9ew7ld3rzt5x.jpg"},{"_id":"5ea697a1db45100017bbc50d","productName":"Samsung Galaxy S8","unitPrice":999,"unitInStock":1000,"description":"Samsung super kool","manufacturer":"Samsung","category":"Smartphone","conditions":"new","__v":0,"image":"http://res.cloudinary.com/fsoft-fresher/image/upload/v1587976098/ootoc5iz9qyur8khqpum.jpg"},{"_id":"5ea697c8db45100017bbc50e","productName":"Samsung Note10","unitPrice":999,"unitInStock":1000,"description":"Samsung super kool","manufacturer":"Samsung","category":"Smartphone","conditions":"new","__v":0,"image":"http://res.cloudinary.com/fsoft-fresher/image/upload/v1587976137/xkbxxyxpqngfmzdoi1kw.jpg"},{"_id":"5ea697f5db45100017bbc50f","productName":"Oneplus 7 pro","unitPrice":999,"unitInStock":1000,"description":"Oneplus rule the world","manufacturer":"Oneplus 7 pro","category":"Smartphone","conditions":"new","__v":0,"image":"http://res.cloudinary.com/fsoft-fresher/image/upload/v1587976181/tc8yidd0djbocj89v89v.jpg"},{"_id":"5ea69824db45100017bbc510","productName":"Oneplus 7 pro","unitPrice":500,"unitInStock":100,"description":"Oneplus rule the world","manufacturer":"Oneplus 7 pro","category":"Smartphone","conditions":"old","__v":0,"image":"http://res.cloudinary.com/fsoft-fresher/image/upload/v1587976229/m5vr79eyvy9mzyxau7kz.jpg"},{"_id":"5ea69839db45100017bbc511","productName":"Oneplus 7 pro","unitPrice":50,"unitInStock":5,"description":"Oneplus rule the world","manufacturer":"Oneplus 7 pro","category":"Smartphone","conditions":"refurbished","__v":0,"image":"http://res.cloudinary.com/fsoft-fresher/image/upload/v1587976250/wcmoauqpwzlie12blywv.jpg"},{"_id":"5eafce2550825c0017243c22","productName":"Ipx","unitPrice":1000,"unitInStock":100,"description":"1212","manufacturer":"12","category":"12","conditions":"new","__v":0,"image":"http://res.cloudinary.com/fsoft-fresher/image/upload/v1588579879/ip7wci2um4z3nqfrieps.jpg"}])

    spyOn(service,'GetProductList').and.returnValue(fakereturndata)
    component.ngOnInit()
    expect(component.productlist.length).toEqual(7)
  })
});
