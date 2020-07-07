import { Component } from "@angular/core";
import { CarbonRadioComponent } from "../radio/radio.component";
import SelectBoxesComponent from "formiojs/components/selectboxes/SelectBoxes.js";
@Component({
  selector: "ibm-formio-selectboxes",
  templateUrl: "./selectboxes.component.html",
})
export class CarbonSelectBoxesComponent extends CarbonRadioComponent {
  public value: any = {};
  public disabled = false;

  setInstance(instance) {
    instance.component.values.forEach((option) => {
      this.value[option.value] = false;
    });
    super.setInstance(instance);
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    const normalizedValue = this.instance.normalizeValue(value);
    for (const prop in normalizedValue) {
      if (normalizedValue.hasOwnProperty(prop)) {
        this.value[prop] = normalizedValue[prop];
      }
    }
  }

  setDisabled(disabled) {
    this.disabled = !!disabled;
  }

  onChange() {
    this.instance.updateValue(this.getValue(), { modified: true });
    this.instance.triggerChange({ modified: true });
  }
}
SelectBoxesComponent.CarbonComponent = CarbonSelectBoxesComponent;
export { SelectBoxesComponent };
