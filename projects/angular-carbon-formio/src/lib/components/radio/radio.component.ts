import { Component } from '@angular/core';
import { CarbonComponent } from '../CarbonComponent';
import RadioComponent from 'formiojs/components/radio/Radio.js';

@Component({
  selector: 'ibm-formio-radio',
	templateUrl: './radio.component.html'
})
export class CarbonRadioComponent extends CarbonComponent {
  getLayout() {
    return this.instance.component.inline ? 'row' : 'column';
  }

  isRadioChecked(option) {
    return option.value === this.instance.dataValue;
  }

  clearValue(event, option) {
    if (this.isRadioChecked(option)) {
      event.preventDefault();
      this.deselectValue();
    }
  }

  deselectValue() {
    this.instance.updateValue(null, {
      modified: true,
    });
  }
}
RadioComponent.CarbonComponent = CarbonRadioComponent;
export { RadioComponent };
