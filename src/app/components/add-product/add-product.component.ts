import { Component, OnInit, Inject } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductService } from "src/app/service/product.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { NotificationService } from "src/app/service/notification.service";

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
    private ns: NotificationService,
    private dialogRef: MatDialogRef<AddProductComponent>
  ) {}

  ngOnInit() {
    this.AddProductForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(new RegExp("^[^\\s].*")),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.pattern(new RegExp("^[^\\s].*")),
      ]),
      price: new FormControl(null),
      unit: new FormControl(null, [
        Validators.required,
        Validators.pattern(new RegExp("^[^\\s].*")),
      ]),
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
      this.ns.warning("Product updated successfully.");
    } else {
      this.ps.addProduct(form as Product);
      this.ns.success("New product entry successfull.");
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
