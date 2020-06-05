import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from "src/app/service/product.service";
import { Product } from "src/app/models/product.model";
import { NotificationService } from "src/app/service/notification.service";
import { Router } from "@angular/router";

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
    private router: Router
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
    this.ns.success(product.name + " added to Cart.");
  }

  viewProduct(product: Product) {
    // this.ns.warning("Biewing details of product - " + product.name);
    this.router.navigate(["/product", product.id]);
  }
}
