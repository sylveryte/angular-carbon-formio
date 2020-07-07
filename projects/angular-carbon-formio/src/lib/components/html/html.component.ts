import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CarbonComponent } from '../CarbonComponent';
import HtmlComponent from 'formiojs/components/html/HTML.js';

@Component({
  selector: 'mat-formio-html',
  template: `<div #htmlBody></div>`
})
export class MaterialHtmlComponent extends CarbonComponent implements AfterViewInit {
  @ViewChild('htmlBody', {static: false}) htmlBody: ElementRef;

  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.instance.component.refreshOnChange) {
      this.instance.checkRefreshOn = () => {
        this.htmlBody.nativeElement.innerHTML = this.instance.renderContent();
      };
    }
  }
}
HtmlComponent.CarbonComponent = MaterialHtmlComponent;
export { HtmlComponent };
