import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/service/cart.service";
import { Cart } from "src/app/models/cart.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  constructor(private cs: CartService) {}
  cart: Cart[] = new Array<Cart>();
  ngOnInit() {
    this.cart = this.cs.loadCart();
  }
}
