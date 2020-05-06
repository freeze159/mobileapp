import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeProductListComponent } from '../home-product-list.component'
import { ProductComponent } from './product.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
describe('ProductComponent', () => {
  let component: HomeProductListComponent;
  let fixture: ComponentFixture<HomeProductListComponent>;
  // let fixtureproduct: ComponentFixture<ProductComponent>
  // let productComponent: ProductComponent;
  let product: Product
  class Product {
    productName = 'IpX'
    unitPrice = 1000
    quantity = 1
    cart = []
    addCart() {
      let data = {
        productName: this.productName,
        unitPrice: this.unitPrice,
        quantity: this.quantity
      }
      this.cart.push(data)
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent, HomeProductListComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();

  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductListComponent);
    component = fixture.componentInstance;
    product = new Product();
    // productComponent = fixtureproduct.componentInstance
    fixture.detectChanges();
    // fixtureproduct.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add cart', () => {
    let fakeReturnedData = {
      productName: 'IpX',
      unitPrice: 1000,
      quantity: 1
    }
    product.addCart()
    expect(product.cart[0]).toEqual(fakeReturnedData)
  })
});
