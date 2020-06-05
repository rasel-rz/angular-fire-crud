import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { ProductService } from "src/app/service/product.service";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { AddProductComponent } from "../add-product/add-product.component";
import { NotificationService } from "src/app/service/notification.service";

@Component({
  selector: "app-admin-panel",
  templateUrl: "./admin-panel.component.html",
  styleUrls: ["./admin-panel.component.css"],
})
export class AdminPanelComponent implements OnInit {
  constructor(
    private ps: ProductService,
    private dialog: MatDialog,
    private ns: NotificationService
  ) {}
  products: Product[];
  ngOnInit() {
    this.ps.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addProduct() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = null;
    this.dialog
      .open(AddProductComponent, dialogConfig)
      .afterClosed()
      .subscribe((obs) => {
        this.ngOnInit();
      });
  }

  editProduct(product: Product) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = product;
    this.dialog
      .open(AddProductComponent, dialogConfig)
      .afterClosed()
      .subscribe((obs) => {
        this.ngOnInit();
      });
  }

  deleteProduct(product: Product) {
    this.ps.deleteProduct(product);
    this.ns.error('Product "' + product.name + '" deleted!');
  }
}
