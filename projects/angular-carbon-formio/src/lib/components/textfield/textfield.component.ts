import { Component, OnInit, AfterContentInit } from "@angular/core";
import TextFieldComponent from "formiojs/components/textfield/TextField.js";
import { CarbonComponent } from "../CarbonComponent";

@Component({
  selector: "ibm-formio-textfield",
  templateUrl: "./textfield.component.html",
})
export class CarbonTextfieldComponent extends CarbonComponent
  implements AfterContentInit {
  public inputType = "text";

  ngAfterContentInit() {
    if (this.instance && this.control && this.instance.component.disabled) {
      this.control.disable();
    }
  }

  getHint() {
    if (!this.instance || !this.control || !this.control.value) {
      return "";
    }

    const { showWordCount, showCharCount } = this.instance.component;

    if (showWordCount && showCharCount) {
      return `${this.getWordsCount()} words, ${
        this.control.value.length
      } characters`;
    } else if (showWordCount) {
      return `${this.getWordsCount()} words`;
    } else {
      return `${this.control.value.length} characters`;
    }
  }

  getWordsCount() {
    const matches = this.control.value
      ? this.control.value.match(/[\w\d’'-]+/gi)
      : [];
    return matches ? matches.length : 0;
  }

  getFormFieldAppearance() {
    const appearances = ["legacy", "standard", "fill", "outline"];
    const appearance = this.instance.component.appearance
      ? this.instance.component.appearance.toLowerCase()
      : "";
    return appearances.includes(appearance) ? appearance : undefined;
  }

  isError() {
    if (this.instance.error) {
      this.control.setErrors(this.instance.component.validate);
      return true;
    } else {
      return false;
    }
  }

  getErrorMessage() {
    if (this.instance.error && this.instance.error.messages) {
      const { messages } = this.instance.error;

      for (const msg of messages) {
        if (msg.context && this.control.hasError(msg.context.validator)) {
          return this.instance.error.message;
        }
      }
    }
  }
}
TextFieldComponent.CarbonComponent = CarbonTextfieldComponent;
export { TextFieldComponent };
