import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./components/products/products.component";
import { AdminPanelComponent } from "./components/admin-panel/admin-panel.component";
import { ViewProductComponent } from "./components/view-product/view-product.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: ProductsComponent,
  },
  {
    path: "admin",
    component: AdminPanelComponent,
  },
  {
    path: "product/:id",
    component: ViewProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
