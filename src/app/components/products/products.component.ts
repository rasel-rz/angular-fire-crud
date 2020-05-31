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

  deleteProduct(product: Product) {
    this.ps.deleteProduct(product);
  }

  editProduct(product: Product) {
    // Need to refill the form. Don't know how to do that!
  }
}
