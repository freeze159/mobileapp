import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-cart',
  templateUrl: './home-cart.component.html',
  styleUrls: ['./home-cart.component.css']
})
export class HomeCartComponent implements OnInit {
  cartItems = []
  constructor() {
    this.cartItems = JSON.parse(localStorage.getItem('cart'))
  }

  ngOnInit(): void {

  }
  clear() {
    localStorage.removeItem('cart')
    this.cartItems = []
  }
  checkOut() {

  }
  remove(item: any) {
    console.log(item)
    let index = this.cartItems.findIndex(ele => ele == item)
    let oldCart = JSON.parse(localStorage.getItem('cart'))
    this.cartItems.splice(index,1)
    
    oldCart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(oldCart))
    
  }

}
