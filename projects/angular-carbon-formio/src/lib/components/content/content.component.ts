import { Component } from '@angular/core';
import { CarbonComponent } from '../CarbonComponent';
import ContentComponent from 'formiojs/components/content/Content.js';
@Component({
  selector: 'ibm-formio-content',
  template: `<div [innerHTML]="instance.content"></div>`
})
export class CarbonContentComponent extends CarbonComponent {}
ContentComponent.CarbonComponent = CarbonContentComponent;
export { ContentComponent };
