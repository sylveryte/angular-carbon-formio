import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { CarbonComponent } from "../CarbonComponent";
import TextAreaComponent from "formiojs/components/textarea/TextArea.js";
import isNil from "lodash/isNil";

@Component({
  selector: "ibm-formio-textarea",
  styleUrls: ["./textarea.component.css"],
  templateUrl: "./textarea.component.html",
})
export class CarbonTextareaComponent extends CarbonComponent
  implements AfterViewInit {
  @ViewChild("textarea", { static: false }) textarea: ElementRef;

  ngAfterViewInit() {
    // Attach the element so the wysiwyg will work.
    this.instance.attachElement(this.textarea.nativeElement);
  }

  getValue() {
    return isNil(this.control.value) ? "" : this.control.value;
  }
}
TextAreaComponent.CarbonComponent = CarbonTextareaComponent;
export { TextAreaComponent };
