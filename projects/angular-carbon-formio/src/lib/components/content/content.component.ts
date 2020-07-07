import { Component } from '@angular/core';
import { CarbonComponent } from '../CarbonComponent';
import ContentComponent from 'formiojs/components/content/Content.js';
@Component({
  selector: 'mat-formio-content',
  template: `<div [innerHTML]="instance.content"></div>`
})
export class MaterialContentComponent extends CarbonComponent {}
ContentComponent.CarbonComponent = MaterialContentComponent;
export { ContentComponent };
