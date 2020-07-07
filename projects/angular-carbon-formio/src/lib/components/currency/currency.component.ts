import { Component } from "@angular/core";
import { TEXTFIELD_TEMPLATE } from "../textfield/textfield.component";
import { CarbonNumberComponent } from "../number/number.component";
import CurrencyComponent from "formiojs/components/currency/Currency.js";
import _ from "lodash";

@Component({
  selector: "ibm-formio-currency",
  template: TEXTFIELD_TEMPLATE,
})
export class CarbonCurrencyComponent extends CarbonNumberComponent {
  public inputType = "text";

  onChange() {
    const newValue = _.isNil(this.getValue()) ? "" : this.getValue();
    this.instance.updateValue(newValue, { modified: true });
  }
}
CurrencyComponent.CarbonComponent = CarbonCurrencyComponent;
export { CurrencyComponent };
