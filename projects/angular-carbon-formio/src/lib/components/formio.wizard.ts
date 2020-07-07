import { Component, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import Wizard from 'formiojs/Wizard';
import Displays from 'formiojs/displays/Displays';
import { CarbonNestedComponent } from './CarbonNestedComponent';

@Component({
  selector: 'mat-formio-wizard',
  styles: [
    ':host .navigation-button-row { margin-top: 8px; }',
    ':host .navigation-button-row button { margin-right: 8px; }'
  ],
  template: `
    <mat-horizontal-stepper [linear]="isLinear" #stepper>
      <mat-step *ngFor="let page of instance.pages" [label]="page.component.title">
        <ng-template #components></ng-template>
        <div class="navigation-button-row">
          <button *ngIf="instance.hasButton('cancel')" mat-raised-button (click)="resetWizard()">Cancel</button>
          <button *ngIf="instance.hasButton('previous')" mat-raised-button color="primary" (click)="prevPage()">Previous</button>
          <button *ngIf="instance.hasButton('next')" mat-raised-button color="primary" (click)="nextPage()">Next</button>
          <button *ngIf="instance.hasButton('submit')" mat-raised-button color="primary" (click)="submit()">Submit</button>
        </div>
      </mat-step>
    </mat-horizontal-stepper>`
})
export class MaterialWizardComponent extends CarbonNestedComponent {
  @ViewChild('stepper', {static: true}) stepper: MatStepper;
  public isLinear = true;
  setInstance(instance: any) {
    this.isLinear = (
      instance.options &&
      instance.options.breadcrumbSettings &&
      instance.options.breadcrumbSettings.clickable
    ) ? false : true;
    instance.pages.forEach((page, pageIndex) => {
      page.viewContainer = () => {
        return this.viewContainers ? this.viewContainers[pageIndex] : null;
      };
    });
    super.setInstance(instance);
  }

  resetWizard() {
    this.instance.cancel();
    this.stepper.reset();
  }

  nextPage() {
    this.instance.nextPage().then(() => this.stepper.next());
  }

  prevPage() {
    this.instance.prevPage().then(() => this.stepper.previous());
  }

  submit() {
    this.instance.submit();
  }

  renderComponents() {
    if (this.instance.renderComponents && this.instance.pages) {
      this.instance.renderComponents(this.instance.pages.reduce((comps, page) => {
        return comps.concat(page.components);
      }, []));
    }
  }
}
Wizard.CarbonComponent = MaterialWizardComponent;
Displays.addDisplay('wizard', Wizard);
export { Wizard };
