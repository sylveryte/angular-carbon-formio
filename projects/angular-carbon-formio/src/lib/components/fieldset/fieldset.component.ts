import { Component } from '@angular/core';
import FieldsetComponent from 'formiojs/components/fieldset/Fieldset.js';
import { CarbonNestedComponent } from '../CarbonNestedComponent';
@Component({
  selector: 'mat-formio-fieldset',
  template: `
    <fieldset>
      <legend [attr.ref]="'header'">
        {{ instance.component.legend }}
        <mat-icon *ngIf="instance.component.tooltip"
                  matSuffix
                  matTooltip="{{ instance.component.tooltip }}"
        >
          info
        </mat-icon>
      </legend>
      <div class="fieldset-body" [attr.ref]="instance.component.key" fxLayout="column" fxLayoutGap="1em">
        <ng-template #components></ng-template>
      </div>
    </fieldset>
  `,
  styles: []
})
export class MaterialFieldsetComponent extends CarbonNestedComponent {}
FieldsetComponent.CarbonComponent = MaterialFieldsetComponent;
export { FieldsetComponent };
