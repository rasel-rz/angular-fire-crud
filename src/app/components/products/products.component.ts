import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from "src/app/service/product.service";
import { Product } from "src/app/models/product.model";
import { NotificationService } from "src/app/service/notification.service";
import { Router } from "@angular/router";
import { CartService } from "src/app/service/cart.service";
import { Cart } from "src/app/models/cart.model";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  isLoading = true;

  constructor(
    private ps: ProductService,
    private ns: NotificationService,
    private router: Router,
    private cs: CartService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.ps.getProducts().subscribe((products) => {
      this.products = products;
      this.isLoading = false;
    });
  }

  addToCart(product: Product) {
    // Add to cart functionally!
    let cartItem: Cart = {
      productId: product.id,
      productName: product.name,
      quantity: 1,
      pricePerUnit: product.price,
    };
    this.cs.addProduct(cartItem);
  }

  viewProduct(product: Product) {
    // this.ns.warning("Biewing details of product - " + product.name);
    this.router.navigate(["/product", product.id]);
  }
}
