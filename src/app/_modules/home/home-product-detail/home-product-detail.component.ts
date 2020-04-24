import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-home-product-detail',
  templateUrl: './home-product-detail.component.html',
  styleUrls: ['./home-product-detail.component.css']
})
export class HomeProductDetailComponent implements OnInit {

  constructor(private atv: ActivatedRoute, private productS: ProductService) { }
  product: any
  quantity: number = 1
  ngOnInit(): void {
    this.atv.params.subscribe(res => {
      let id = res.id
      this.productS.GetProductById(id).subscribe(res => {
        this.product = res
      })
    })
  }
  addCart() {
    let data = {
      name: this.product.name,
      unitPrice: this.product.unitPrice,
      quantỉty: 1
    }
    if (!localStorage.getItem('cart')) {
      let cart = []
      cart.push(data)
      console.log(JSON.stringify(cart))
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    else {
      let oldCart = JSON.parse(localStorage.getItem('cart'))
      let index = oldCart.findIndex(ele => ele.name == data.name)
      if (index == -1) {
        oldCart.push(data)
        localStorage.setItem('cart', JSON.stringify(oldCart))

      }
      else {
        Object(oldCart[index]).quantỉty +=1
        localStorage.setItem('cart', JSON.stringify(oldCart))
      }
      // 

    }
  }

}
