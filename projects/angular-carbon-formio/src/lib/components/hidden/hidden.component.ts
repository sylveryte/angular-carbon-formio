import { Component } from '@angular/core';
import { CarbonComponent } from '../CarbonComponent';
import HiddenComponent from 'formiojs/components/hidden/Hidden.js';
@Component({
  selector: 'mat-formio-hidden',
  template: `<input matInput type="hidden" [formControl]="control" #input>`
})
export class MaterialHiddenComponent extends CarbonComponent {}
HiddenComponent.CarbonComponent = MaterialHiddenComponent;
export { HiddenComponent };
