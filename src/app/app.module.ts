import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { ProductsComponent } from "./components/products/products.component";
import { ProductService } from "./service/product.service";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminPanelComponent } from "./components/admin-panel/admin-panel.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule, MatSnackBarModule } from "@angular/material";
import { NotificationService } from "./service/notification.service";
import { ViewProductComponent } from './components/view-product/view-product.component';
import { CartComponent } from './components/cart/cart.component';
import { GoPreviousPageComponent } from './components/go-previous-page/go-previous-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    AddProductComponent,
    AdminPanelComponent,
    ViewProductComponent,
    CartComponent,
    GoPreviousPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [ProductService, NotificationService],
  bootstrap: [AppComponent],
  entryComponents: [AddProductComponent],
})
export class AppModule {}
