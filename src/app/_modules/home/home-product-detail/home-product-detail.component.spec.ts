import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductDetailComponent } from './home-product-detail.component';
import { ActivatedRoute } from '@angular/router';
describe('HomeProductDetailComponent', () => {
  let component: HomeProductDetailComponent;
  let fixture: ComponentFixture<HomeProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProductDetailComponent ],
      imports: [

        ActivatedRoute
      
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
