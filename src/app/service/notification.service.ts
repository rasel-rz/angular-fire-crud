import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top",
  };
  constructor(private snacs: MatSnackBar) {}

  success(msg) {
    this.config["panelClass"] = ["notification", "success"];
    this.snacs.open(msg, "", this.config);
  }

  error(msg) {
    this.config["panelClass"] = ["notification", "danger"];
    this.snacs.open(msg, "", this.config);
  }

  warning(msg) {
    this.config["panelClass"] = ["notification", "warning"];
    this.snacs.open(msg, "", this.config);
  }
}
