import { Component } from '@angular/core';
import { CarbonTextfieldComponent, TEXTFIELD_TEMPLATE } from '../textfield/textfield.component';
import PasswordComponent from 'formiojs/components/password/Password.js';
@Component({
  selector: 'mat-formio-password',
  template: TEXTFIELD_TEMPLATE
})
export class MaterialPasswordComponent extends CarbonTextfieldComponent {
  public inputType = 'password';
}
PasswordComponent.CarbonComponent = MaterialPasswordComponent;
export { PasswordComponent };
