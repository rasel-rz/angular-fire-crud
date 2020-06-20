import { Injectable } from "@angular/core";
import { Cart } from "../models/cart.model";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart: Cart[];
  cartCount: number;
  cartTotalPrice: number;
  constructor() {
    this.cart = [];
    this.loadCart();
    this.updateCartCount();
  }

  loadCart(): Cart[] {
    this.cart = JSON.parse(sessionStorage.getItem("cart")) as Cart[];
    return this.cart;
  }

  updateCartPrice() {
    this.loadCart();
    let price = 0;
    if (this.cart.length > 0) {
      this.cart.forEach((item) => {
        price += item.quantity * item.pricePerUnit;
      });
    }
    this.cartTotalPrice = price;
    // console.log(this.cartTotalPrice);
  }

  updateCartCount() {
    this.loadCart();
    let count = 0;
    if (this.cart.length > 0) {
      this.cart.forEach((item) => {
        count += item.quantity;
      });
    }
    this.cartCount = count;
  }

  deleteProduct(productId: string) {
    this.loadCart();
    let index = -1;
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].productId === productId) {
        index = i;
      }
    }
    console.log(index);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
    this.updateSessionStorage(this.cart);
  }
  addProduct(cartItem: Cart) {
    this.loadCart();
    const itemExists = this.checkIfItemExist(cartItem);
    console.warn(itemExists);
    if (!itemExists) {
      this.cart.push(cartItem);
      console.log("Product added to cart.");
    } else {
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].productId === cartItem.productId) {
          this.cart[i].quantity += 1;
        }
      }
    }
    this.updateSessionStorage(this.cart);
  }

  checkIfItemExist(item: Cart): boolean {
    console.log(item, this.cart);
    if (this.cart === null || this.cart === undefined || this.cart.length < 1) {
      return false;
    }
    let flag = false;
    for (let itemInCart of this.cart) {
      if (itemInCart.productId === item.productId) {
        flag = true;
        break;
      }
    }
    return flag;
  }

  updateProduct(productId: string, quantity: number) {
    this.loadCart();
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].productId === productId) {
        this.cart[i].quantity = quantity;
      }
    }
    this.updateSessionStorage(this.cart);
  }

  updateSessionStorage(cart: Cart[]) {
    sessionStorage.removeItem("cart");
    sessionStorage.setItem("cart", JSON.stringify(cart));
    this.updateCartCount();
    this.updateCartPrice();
  }
}
