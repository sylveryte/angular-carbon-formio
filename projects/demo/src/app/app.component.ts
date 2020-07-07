import { Component } from "@angular/core";
import { value as DEFAULT_VALUE } from "./syldata";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Carbon Formio Demo";
  defaultValue = DEFAULT_VALUE;
  submissionData: string;

  update(value: string): void {
    this.defaultValue = JSON.parse(value);
    console.log(JSON.parse(value));
  }
}
