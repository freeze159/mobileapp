import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule

      ]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('it should create product', () => {
    let thongtin = {
      "productName": "Ipx",
      "unitPrice": "1000",
      "unitInStock": "100",
      "description": "1212",
      "manufacturer": "Apple",
      "category": "Apple",
      "conditions": "new",

    }
    let fileData = new File([""], "gaugau", { type: "text/plain", lastModified: Date.now() })
    let formData = new FormData()
    formData.append('product', fileData, fileData.name);
    formData.append('productName', thongtin.productName)
    formData.append('unitPrice', thongtin.unitPrice)
    formData.append('unitInStock', thongtin.unitInStock)
    formData.append('description', thongtin.description)
    formData.append('manufacturer', thongtin.manufacturer)
    formData.append('category', thongtin.category)
    formData.append('conditions', thongtin.conditions)

    let fakeReturnData = { "_id": "5eafce2550825c0017243c22", "productName": "Ipx", "unitPrice": 1000, "unitInStock": 100, "description": "1212", "manufacturer": "Apple", "category": "Apple", "conditions": "new", "__v": 0, "image": "http://res.cloudinary.com/fsoft-fresher/image/upload/v1588579879/ip7wci2um4z3nqfrieps.jpg" }

    spyOn(service['http'], 'post').and.returnValue(of(fakeReturnData));

    const result = service.CreateProduct(formData);
    result.subscribe((values) => {
      expect(values).toEqual(fakeReturnData);

    });
  })
  it('it should get product', () => {
    let fakeReturnData = [{
      "_id": "5eafce2550825c0017243c22",
      "productName": "Ipx",
      "unitPrice": 1000,
      "unitInStock": 100,
      "description": "1212",
      "manufacturer": "Apple",
      "category": "Apple",
      "conditions": "new",
      "__v": 0,
      "image": "http://res.cloudinary.com/fsoft-fresher/image/upload/v1588579879/ip7wci2um4z3nqfrieps.jpg"
    },
    {
      "_id": "5eafce2550825c0017243c44",
      "productName": "Oneplus",
      "unitPrice": 1000,
      "unitInStock": 100,
      "description": "1212",
      "manufacturer": "Oneplus",
      "category": "Oneplus",
      "conditions": "new",
      "__v": 0,
      "image": "http://res.cloudinary.com/fsoft-fresher/image/upload/v1588579879/ip7wci2um4z3nqfrieps.jpg"
    },
    {
      "_id": "5eafce2550825c0017243c33",
      "productName": "SamSung",
      "unitPrice": 1000,
      "unitInStock": 100,
      "description": "1212",
      "manufacturer": "SamSung",
      "category": "SamSung",
      "conditions": "new",
      "__v": 0,
      "image": "http://res.cloudinary.com/fsoft-fresher/image/upload/v1588579879/ip7wci2um4z3nqfrieps.jpg"
    }]

    spyOn(service['http'], 'get').and.returnValues(of(fakeReturnData))
    const result = service.GetProductList()
    result.subscribe((res: any) => {
      expect(res.length).toEqual(fakeReturnData.length)
    })
  })
  it('it should get product by Id', () => {
    
    let fakeReturnData = {
      "_id": "5eafce2550825c0017243c22",
      "productName": "Ipx",
      "unitPrice": 1000,
      "unitInStock": 100,
      "description": "1212",
      "manufacturer": "Apple",
      "category": "Apple",
      "conditions": "new", "__v": 0,
      "image": "http://res.cloudinary.com/fsoft-fresher/image/upload/v1588579879/ip7wci2um4z3nqfrieps.jpg"
    }
    let { _id } = fakeReturnData
    spyOn(service['http'],'get').and.returnValues(of(fakeReturnData))
    const result = service.GetProductById(_id)
    result.subscribe((res:any)=>{
      expect(res._id).toEqual(fakeReturnData._id)
    })
  })
});
