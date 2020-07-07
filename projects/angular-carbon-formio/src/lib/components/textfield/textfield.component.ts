import { Component, OnInit, AfterContentInit } from "@angular/core";
import TextFieldComponent from "formiojs/components/textfield/TextField.js";
import { CarbonComponent } from "../CarbonComponent";

// syl short this out below is copy of html file
export const TEXTFIELD_TEMPLATE = `
<ibm-formio-form-field
  [instance]="instance"
  [componentTemplate]="componentTemplate"
></ibm-formio-form-field>
<ng-template #componentTemplate let-hasLabel>
  <ibm-label fxFill>
    <ibm-label *ngIf="hasLabel">
      <span [instance]="instance" ibmFormioLabel></span>
    </ibm-label>

    <!-- syl matPrefix -->
    <span *ngIf="instance.component.prefix && instance.type !== 'currency'">
      {{ instance.component.prefix }}&nbsp;
    </span>
    <input
      ibmText
      type="{{ inputType }}"
      [formControl]="control"
      [placeholder]="instance.component.placeholder"
      (input)="onChange()"
      #input
    />
    <span *ngIf="instance.component.suffix" matSuffix>{{
      instance.component.suffix
    }}</span>

    <ibm-label
      *ngIf="
        instance.component.showWordCount || instance.component.showCharCount
      "
      [invalid]="isError()"
      [invalidText]="getErrorMessage()"
    >
      <!--   {{ getHint() }} -->
    </ibm-label>

    <!-- SYL DONE -->
    <!-- <mat-hint -->
    <!--   *ngIf=" -->
    <!--     instance.component.showWordCount || instance.component.showCharCount -->
    <!--   " -->
    <!-- > -->
    <!--   {{ getHint() }} -->
    <!-- </mat-hint> -->
    <!-- <br /> -->
    <!-- <mat-error *ngIf="isError()">{{ getErrorMessage() }}</mat-error> -->
  </ibm-label>
</ng-template>
`;

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
