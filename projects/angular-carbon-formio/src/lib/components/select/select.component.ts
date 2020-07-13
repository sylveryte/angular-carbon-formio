import { Component, OnInit } from "@angular/core";
import { CarbonComponent } from "../CarbonComponent";
import SelectComponent from "formiojs/components/select/Select.js";
@Component({
  selector: "ibm-formio-select",
  templateUrl: "./select.component.html",
})
export class CarbonSelectComponent extends CarbonComponent implements OnInit {
  items: Array<any>;

  selectOptionsResolve: any;

  setInstance(instance: any) {
    super.setInstance(instance);
    this.instance.triggerUpdate();
    this.items = this.transformOptionForCarbon(
      this.instance.component.data.values
    );
  }

  ngOnInit() {}

  sylonChange(e) {
    console.log("instance  ", this.instance);
    console.log("e===>", e);
    this.onChange();
  }

  transformOptionForCarbon(values) {
    const transformed = new Array();
    values.forEach((x) => {
      transformed.push({
        content: x.value,
        selected: this.isDefaultValue(x.value),
      });
    });
    console.log("transformed ", transformed);
    return transformed;
  }

  isDefaultValue(x) {
    console.log(this.instance.defaultValue);
    return this.instance.defaultValue.indexOf(x) >= 0 ? true : false;
  }
}
SelectComponent.CarbonComponent = CarbonSelectComponent;

// Make sure we detect changes when new items make their way into the select dropdown.
const setItems = SelectComponent.prototype.setItems;
SelectComponent.prototype.setItems = function (...args) {
  setItems.call(this, ...args);
  if (this.carbonComponent && this.carbonComponent.selectOptionsResolve) {
    this.carbonComponent.selectOptionsResolve(this.selectOptions);
  }
};

export { SelectComponent };
