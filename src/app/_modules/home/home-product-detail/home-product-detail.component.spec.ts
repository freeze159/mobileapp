import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HomeProductDetailComponent } from './home-product-detail.component';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from 'src/app/_services/product.service';
import { of } from 'rxjs';
describe('HomeProductDetailComponent', () => {
  let component: HomeProductDetailComponent;
  let fixture: ComponentFixture<HomeProductDetailComponent>;
  let service: ProductService

  beforeEach(async(() => {


    TestBed.configureTestingModule({
      declarations: [HomeProductDetailComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,

      ],
      providers: [ProductService]
    })

      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductDetailComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ProductService)
    
  });

  it('should create', () => {
    component.product = {
      _id: "5ea69487db45100017bbc50c",
      productName: "iPhoneX",
      unitPrice: 999, "unitInStock": 150,
      description: "Super phone 2020 destroy humankind.",
      manufacturer: "Apple",
      category: "Smartphone",
      conditions: "new",
      __v: 0,
      image: "http://res.cloudinary.com/fsoft-fresher/image/upload/v1587975304/tko2ruxy9ew7ld3rzt5x.jpg"
    }
    // You need to set component.product to something valid before calling fixture.detectChanges().
    // This is because detectChanges() executes ngOnInit(), and that is where this.GetProductById gets set up. 
    // Take fixture.detectChanges() out of your beforeEach, and move it to inside the it() after you set a value for component.product
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  
});
