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
