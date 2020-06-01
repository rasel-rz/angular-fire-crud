import { Injectable } from "@angular/core";

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "angularfire2/firestore";
import { Product } from "../models/product.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { NotificationService } from "./notification.service";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;
  productDoc: AngularFirestoreDocument<Product>;

  constructor(public afs: AngularFirestore) {
    this.productsCollection = this.afs.collection("products", (ref) =>
      ref.orderBy("name", "asc")
    );
    this.products = this.productsCollection
      // .valueChanges();
      .snapshotChanges()
      .pipe(
        map((changes) => {
          return changes.map((c) => {
            // console.log(c);
            const data = c.payload.doc.data() as Product;
            data.id = c.payload.doc.id;
            return data;
          });
        })
      );
  }

  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    this.productsCollection.add(product);
  }

  deleteProduct(product: Product) {
    this.productDoc = this.afs.doc("products/" + product.id);
    this.productDoc.delete();
  }

  updateProduct(product: Product) {
    this.productDoc = this.afs.doc("products/" + product.id);
    this.productDoc.update(product);
  }
}
