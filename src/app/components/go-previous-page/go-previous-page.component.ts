import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-go-previous-page",
  templateUrl: "./go-previous-page.component.html",
  styleUrls: ["./go-previous-page.component.css"],
})
export class GoPreviousPageComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}
  goBack() {
    this.location.back();
  }
}
