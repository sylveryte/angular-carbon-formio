import { Component } from "@angular/core";
import { value1 as DEFAULT_VALUE } from "./syldata";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Carbon Formio Demo";
  defaultValue = DEFAULT_VALUE;
  submittedData: string;

  update(value: string): void {
    this.defaultValue = JSON.parse(value);
    console.log(JSON.parse(value));
  }

  onSubmit(event: any) {
    this.submittedData = event.data;
    console.log("submittedData", event.data);
  }
}
