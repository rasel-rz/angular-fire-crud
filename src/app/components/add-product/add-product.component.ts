import { Component, OnInit, Inject } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { FormGroup, FormControl } from "@angular/forms";
import { ProductService } from "src/app/service/product.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"],
})
export class AddProductComponent implements OnInit {
  pageHeader;
  isEdit = false;

  AddProductForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public product: Product,
    private ps: ProductService,
    private dialogRef: MatDialogRef<AddProductComponent>
  ) {}

  ngOnInit() {
    this.AddProductForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null),
      description: new FormControl(null),
      price: new FormControl(null),
      unit: new FormControl(null),
      photo: new FormControl(null),
    });

    if (this.product == null) {
      this.pageHeader = "Prduct Entry";
      this.isEdit = false;
    } else {
      this.pageHeader = "Edit Product";
      this.isEdit = true;
      this.AddProductForm.patchValue({
        id: this.product.id,
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        unit: this.product.unit,
        photo: this.product.photo,
      });
    }
  }

  onSubmit(form) {
    // console.log(form as Product);
    // return;
    if (this.isEdit) {
      this.ps.updateProduct(form as Product);
    } else {
      this.ps.addProduct(form as Product);
    }
    this.AddProductForm.reset();
    this.onClose();
  }

  clearForm() {
    this.AddProductForm.patchValue({
      name: "",
      description: "",
      price: null,
      unit: "",
      photo: "",
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
