import { Component, OnInit, OnDestroy } from "@angular/core";
import { CartService } from "src/app/service/cart.service";
import { Cart } from "src/app/models/cart.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  constructor(public cs: CartService) {}

  // cart: Cart[] = new Array<Cart>();
  ngOnInit() {
    // this.cart = this.cs.loadCart();
    this.cs.updateCartCount();
  }

  setQty(productId: string, quantity: number) {
    if (quantity < 1) {
      this.cs.deleteProduct(productId);
    } else {
      this.cs.updateProduct(productId, quantity);
    }
  }
}
