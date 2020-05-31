import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { FormGroup, FormControl } from "@angular/forms";
import { ProductService } from "src/app/service/product.service";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"],
})
export class AddProductComponent implements OnInit {
  product: Product = {
    name: "",
    description: "",
    price: null,
    unit: "",
    photo: "",
  };

  AddProductForm: FormGroup;

  constructor(private ps: ProductService) {}

  ngOnInit() {
    this.AddProductForm = new FormGroup({
      name: new FormControl(null),
      description: new FormControl(null),
      price: new FormControl(null),
      unit: new FormControl(null),
      photo: new FormControl(null),
    });
  }

  onSubmit(form) {
    // console.log(form as Product);
    this.ps.addProduct(form as Product);
    this.AddProductForm.reset();
  }
}
