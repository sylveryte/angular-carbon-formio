import { Component, OnInit } from "@angular/core";
import { BASIC, ADVANCE } from "./syldata";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Carbon Formio Demo";
  defaultValue: any;
  submittedData: string;
  basicData: any;
  advanceData: any;

  testData = [
    { content: "hi", selected: false },
    { content: "there", selected: false },
    { content: "general", selected: false },
    { content: "kenobi", selected: false },
  ];

  constructor() {
    this.basicData = BASIC;
    this.advanceData = ADVANCE;
  }

  ngOnUnit() {
    this.update(ADVANCE);
  }

  onSubmit(event: any) {
    this.submittedData = event.data;
    console.log("submittedData", event.data);
  }

  update(value: any): void {
    if (typeof value == "string") {
      this.defaultValue = JSON.parse(value);
    } else {
      this.defaultValue = value;
    }
    console.log(this.defaultValue);
  }
}
