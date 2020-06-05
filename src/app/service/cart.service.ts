import { Injectable } from "@angular/core";
import { Cart } from "../models/cart.model";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart: Cart[];
  constructor() {
    this.cart = new Array<Cart>();
  }
  loadCart(): Cart[] {
    this.cart = JSON.parse(sessionStorage.getItem("cart")) as Cart[];
    return this.cart;
  }
  addProduct(cartItem: Cart) {
    this.cart.push(cartItem);
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
  }
}
