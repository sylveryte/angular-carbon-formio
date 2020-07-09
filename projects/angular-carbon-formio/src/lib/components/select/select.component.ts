import { Component, OnInit } from "@angular/core";
import { CarbonComponent } from "../CarbonComponent";
import SelectComponent from "formiojs/components/select/Select.js";
@Component({
  selector: "ibm-formio-select",
  templateUrl: "./select.component.html",
})
export class CarbonSelectComponent extends CarbonComponent implements OnInit {
  selectOptions: Promise<any[]>;
  filteredOptions: Promise<any[]>;
  filteredOptionsLength: number;

  selectOptionsResolve: any;

  setInstance(instance: any) {
    super.setInstance(instance);
    this.instance.triggerUpdate();
  }

  ngOnInit() {
    this.selectOptions = new Promise((resolve) => {
      this.selectOptionsResolve = resolve;
    });
    this.selectOptions.then((options) => {
      this.filteredOptionsLength = options.length;
    });

    this.filteredOptions = this.selectOptions;
  }

  sylonChange(e) {
    this.onChange();
  }

  onFilter(value) {
    this.filteredOptions = this.selectOptions.then((options) => {
      const filtered = options.filter(
        (option) => option.label.indexOf(value) !== -1
      );
      this.filteredOptionsLength = filtered.length;
      return filtered;
    });
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
