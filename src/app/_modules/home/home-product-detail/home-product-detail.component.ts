import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-home-product-detail',
  templateUrl: './home-product-detail.component.html',
  styleUrls: ['./home-product-detail.component.css']
})
export class HomeProductDetailComponent implements OnInit {

  constructor(private atv:ActivatedRoute,private productS:ProductService) { }
  product:any
  ngOnInit(): void {
    this.atv.params.subscribe(res => {
      let id = res.id
      this.productS.GetProductById(id).subscribe(res => {
        this.product=res
        console.log(this.product)
      })

    })
  }

}
