import { Component } from "@angular/core";
import { CarbonComponent } from "../CarbonComponent";
import CheckboxComponent from "formiojs/components/checkbox/Checkbox.js";
import _ from "lodash";

@Component({
  selector: "ibm-formio-checkbox",
  templateUrl: "./checkbox.component.html",
  styles: [
    "::ng-deep .mat-checkbox.validation-error .mat-checkbox-frame {border-color: red; }",
  ],
})
export class CarbonCheckboxComponent extends CarbonComponent {
  getValue() {
    return _.isNil(this.control.value) ? "" : this.control.value;
  }
}
CheckboxComponent.CarbonComponent = CarbonCheckboxComponent;
export { CheckboxComponent };
