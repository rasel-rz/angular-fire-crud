import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/models/product.model";
import { ProductService } from "src/app/service/product.service";

@Component({
  selector: "app-view-product",
  templateUrl: "./view-product.component.html",
  styleUrls: ["./view-product.component.css"],
})
export class ViewProductComponent implements OnInit {
  constructor(private route: ActivatedRoute, private ps: ProductService) {}
  productId: string;
  product: Product = {
    id: null,
    name: null,
    unit: null,
    description: null,
    price: null,
    photo: null,
  };
  isLoading = true;
  quantity = 1;
  ngOnInit() {
    this.isLoading = true;
    // return;
    this.productId = this.route.snapshot.paramMap.get("id");
    this.ps.getProduct(this.productId).subscribe((p) => {
      this.product = p as Product;
      this.product.id = this.productId;
      console.log(p);
      this.isLoading = false;
    });
  }

  addToCart(product: Product, quantity: number) {
    console.log(product, quantity);
  }
}
