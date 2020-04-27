import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: any
  constructor() { }

  ngOnInit(): void {

  }
  addCart() {
    let data = {
      productName: this.product.productName,
      unitPrice: this.product.unitPrice,
      quantity: 1
    }
    if (!localStorage.getItem('cart')) {
      let cart = []
      cart.push(data)
      console.log(JSON.stringify(cart))
      localStorage.setItem('cart', JSON.stringify(cart))
      alert('Product Added')

    }
    else {
      let oldCart = JSON.parse(localStorage.getItem('cart'))
      let index = oldCart.findIndex(ele => ele.productName == data.productName)
      if (index == -1) {
        oldCart.push(data)
        localStorage.setItem('cart', JSON.stringify(oldCart))
        alert('Product Added')

      }
      else {
        Object(oldCart[index]).quantity += 1
        localStorage.setItem('cart', JSON.stringify(oldCart))
        alert('Product Added')

      }
      // 

    }
  }

}
