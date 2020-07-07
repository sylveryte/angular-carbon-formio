import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CarbonComponent } from '../CarbonComponent';
import SignatureComponent from 'formiojs/components/signature/Signature.js';
@Component({
  selector: 'mat-formio-signature',
  template: `
    <ibm-formio-form-field [instance]="instance" [componentTemplate]="componentTemplate"></ibm-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <div #signature>

        <mat-label *ngIf="hasLabel">
          <span [instance]="instance" ibmFormioLabel></span>
        </mat-label>

        <button mat-icon-button [ngStyle]="{position: 'absolute'}" ref="refresh">
          <mat-icon>refresh</mat-icon>
        </button>

        <div class="signature-pad-body"
             [ngStyle]="{width: instance.component.width, height: instance.component.height, padding: 0, margin: 0}"
             [attr.tabindex]="instance.component.tabindex || 0"
             ref="padBody"
        >
          <canvas class="signature-pad-canvas"
                  [attr.height]="instance.component.height"
                  ref="canvas"
          ></canvas>
          <img fxFlexFill [ngStyle]="{display: 'none' }" ref="signatureImage">
        </div>
        <div *ngIf="instance.component.footer"
             class="signature-pad-footer"
             fxLayout="row"
             fxLayoutAlign="center center"
        >
          <mat-hint>{{ instance.t(instance.component.footer) }}</mat-hint>
        </div>
      </div>
    </ng-template>
  `
})
export class MaterialSignatureComponent extends CarbonComponent implements AfterViewInit {
  @ViewChild('signature', {static: false}) signatureElement: ElementRef;

  renderComponents() {
    if (this.signatureElement) {
      this.instance.attach(this.signatureElement.nativeElement);
    }
  }

  ngAfterViewInit() {
    this.renderComponents();
  }
}
SignatureComponent.CarbonComponent = MaterialSignatureComponent;
export { SignatureComponent };
