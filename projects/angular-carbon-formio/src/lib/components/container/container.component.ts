import { Component } from '@angular/core';
import { CarbonNestedComponent } from '../CarbonNestedComponent';
import ContainerComponent from 'formiojs/components/container/Container.js';
@Component({
  selector: 'ibm-formio-container',
  template: `
    <div fxLayout="column" fxLayoutGap="1em">
      <ng-template #components></ng-template>
    </div>`
})
export class CarbonContainerComponent extends CarbonNestedComponent { }
ContainerComponent.CarbonComponent = CarbonContainerComponent;
export { ContainerComponent };
