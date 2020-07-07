import {
  Component,
  Optional,
  ChangeDetectorRef,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver,
  NgZone,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormioBaseComponent } from 'angular-formio/FormioBaseComponent';
import { FormioAppConfig } from 'angular-formio/formio.config';
import { Form } from './renderer';
import { get } from 'lodash';

@Component({
  selector: 'carbon-formio',
  styles: ['./formio.component.scss'],
  templateUrl: './formio.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class FormioComponent extends FormioBaseComponent implements OnInit {
  @ViewChild('formio', { static: true, read: ViewContainerRef })
  formioViewContainer: ViewContainerRef;
  constructor(
    private resolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    public ngZone: NgZone,
    @Optional() public config: FormioAppConfig
  ) {
    super(ngZone, config);
  }

  ngOnInit() {
    console.log('formio component initilized, dafuk', this.form);
    console.log('Hello from %c Cateina', 'color:blue');
  }

  getRendererOptions(): any {
    const rendererOptions = super.getRendererOptions();
    return {
      ...rendererOptions,
      validateOnInit: get(rendererOptions, 'validateOnInit', true),
    };
  }

  createRenderer() {
    const options = this.getRendererOptions();
    const flags = {
      validateOnInit: options.validateOnInit,
    };
    options.viewResolver = this.resolver;
    const form = new Form();
    form._form = this.form;
    form.options = options;
    form.options.events = form.events;
    form.instance = form.create(this.form.display);
    form.instance.viewContainer = () => this.formioViewContainer;
    this.ngZone.run(() =>
      form.instance
        .setForm(this.form, flags)
        .then(() => form.readyResolve(form.instance))
        .catch(() => form.readyReject())
    );
    return form.instance;
  }
}
