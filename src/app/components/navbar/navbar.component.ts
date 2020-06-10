import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/service/cart.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  // cartCount: number;
  constructor(public cs: CartService) {}

  ngOnInit() {
    // this.cartCount = this.cs.getCartCount();
    // console.log(this.cartCount);
  }
}
