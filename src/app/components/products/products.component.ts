import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/service/product.service";
import { Product } from "src/app/models/product.model";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private ps: ProductService) {}

  ngOnInit() {
    this.ps.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addToCart(product: Product) {
    // Add to cart functionally!
  }
}
