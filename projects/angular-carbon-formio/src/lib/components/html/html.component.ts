import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CarbonComponent } from '../CarbonComponent';
import HtmlComponent from 'formiojs/components/html/HTML.js';

@Component({
  selector: 'ibm-formio-html',
  template: `<div #htmlBody></div>`
})
export class CarbonHtmlComponent extends CarbonComponent implements AfterViewInit {
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
HtmlComponent.CarbonComponent = CarbonHtmlComponent;
export { HtmlComponent };
