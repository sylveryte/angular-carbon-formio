import { Component } from '@angular/core';
import { CarbonTextfieldComponent, TEXTFIELD_TEMPLATE } from '../textfield/textfield.component';
import EmailComponent from 'formiojs/components/email/Email.js';
@Component({
  selector: 'ibm-formio-email',
  template: TEXTFIELD_TEMPLATE
})
export class CarbonEmailComponent extends CarbonTextfieldComponent {
  public inputType = 'email';
}
EmailComponent.CarbonComponent = CarbonEmailComponent;
export { EmailComponent };
