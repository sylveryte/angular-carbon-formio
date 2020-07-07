import { Component } from "@angular/core";
import {
  CarbonTextfieldComponent,
  TEXTFIELD_TEMPLATE,
} from "../textfield/textfield.component";
import PasswordComponent from "formiojs/components/password/Password.js";
@Component({
  selector: "ibm-formio-password",
  template: TEXTFIELD_TEMPLATE,
})
export class CarbonPasswordComponent extends CarbonTextfieldComponent {
  public inputType = "password";
}
PasswordComponent.CarbonComponent = CarbonPasswordComponent;
export { PasswordComponent };
