import { Component } from '@angular/core';
import { CarbonTextfieldComponent, TEXTFIELD_TEMPLATE } from '../textfield/textfield.component';
import PhoneNumberComponent from 'formiojs/components/phonenumber/PhoneNumber.js';
@Component({
  selector: 'mat-formio-phonenumber',
  template: TEXTFIELD_TEMPLATE
})
export class MaterialPhoneNumberComponent extends CarbonTextfieldComponent {
  public inputType = 'text';
}
PhoneNumberComponent.CarbonComponent = MaterialPhoneNumberComponent;
export { PhoneNumberComponent };
