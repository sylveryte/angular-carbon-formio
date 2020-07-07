import { Component } from '@angular/core';
import { CarbonTextfieldComponent, TEXTFIELD_TEMPLATE } from '../textfield/textfield.component';
import UrlComponent from 'formiojs/components/url/Url.js';
@Component({
  selector: 'mat-formio-url',
  template: TEXTFIELD_TEMPLATE
})
export class MaterialUrlComponent extends CarbonTextfieldComponent {
  public inputType = 'url';
}
UrlComponent.CarbonComponent = MaterialUrlComponent;
export { UrlComponent };
