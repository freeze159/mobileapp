import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-home-product-list',
  templateUrl: './home-product-list.component.html',
  styleUrls: ['./home-product-list.component.css']
})
export class HomeProductListComponent implements OnInit {

  constructor(private productS: ProductService) { }
  productlist: [{name:'Hello',price:10000},{name:'Hello',price:10000},{name:'Hello',price:10000},{name:'Hello',price:10000}]
  ngOnInit(): void {
    this.productS.GetProductList().subscribe((res: any) => {
      this.productlist = res
    })
  }


}
