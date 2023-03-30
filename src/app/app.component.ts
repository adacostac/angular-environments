import { Component, Inject, VERSION } from "@angular/core";
import { ConfigToken } from "./resources/config";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
}
