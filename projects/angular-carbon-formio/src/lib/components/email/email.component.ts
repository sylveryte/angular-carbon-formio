import { Component } from '@angular/core';
import { CarbonTextfieldComponent, TEXTFIELD_TEMPLATE } from '../textfield/textfield.component';
import EmailComponent from 'formiojs/components/email/Email.js';
@Component({
  selector: 'mat-formio-email',
  template: TEXTFIELD_TEMPLATE
})
export class MaterialEmailComponent extends CarbonTextfieldComponent {
  public inputType = 'email';
}
EmailComponent.CarbonComponent = MaterialEmailComponent;
export { EmailComponent };
