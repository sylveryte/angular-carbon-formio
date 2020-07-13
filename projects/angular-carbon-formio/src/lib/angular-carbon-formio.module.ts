import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

import { initRenderer } from "./renderer";
import { FormioComponent } from "./formio.component";
import { CarbonComponent } from "./components/CarbonComponent";

import { CarbonButtonComponent } from "./components/button/button.component";
import { CarbonCheckboxComponent } from "./components/checkbox/checkbox.component";
import { LabelComponent } from "./components/label/label.component";
import { CarbonNestedComponent } from "./components/CarbonNestedComponent";
// import { MaterialButtonComponent } from './components/button/button.component';
import { CarbonTextfieldComponent } from "./components/textfield/textfield.component";
import { CarbonPasswordComponent } from "./components/password/password.component";
// import { MaterialUrlComponent } from './components/url/url.component';
import { CarbonEmailComponent } from "./components/email/email.component";
import { CarbonPhoneNumberComponent } from "./components/phonenumber/phonenumber.component";
import { CarbonNumberComponent } from "./components/number/number.component";
// import { MaterialHiddenComponent } from './components/hidden/hidden.component';
import { CarbonHtmlComponent } from "./components/html/html.component";
// import { MaterialTagsComponent } from './components/tags/tags.component';
import { CarbonCurrencyComponent } from "./components/currency/currency.component";
// import { MaterialDayComponent } from './components/day/day.component';
import { CarbonTextareaComponent } from "./components/textarea/textarea.component";
import { CarbonColumnsComponent } from "./components/columns/columns.component";
import { CarbonContainerComponent } from "./components/container/container.component";
// import { MaterialCheckboxComponent } from './components/checkbox/checkbox.component';
// import { MaterialFieldsetComponent } from './components/fieldset/fieldset.component';
import { CarbonContentComponent } from "./components/content/content.component";
// import { MaterialSignatureComponent } from './components/signature/signature.component';
// import { MaterialSurveyComponent } from './components/survey/survey.component';
import { CarbonSelectBoxesComponent } from "./components/selectboxes/selectboxes.component";
import { CarbonRadioComponent } from "./components/radio/radio.component";
import { CarbonSelectComponent } from "./components/select/select.component";
// import { MaterialPanelComponent } from './components/panel/panel.component';
// import { MaterialTabsComponent } from './components/tabs/tabs.component';
// import { MaterialTableComponent } from './components/table/table.component';
// import { MaterialDateComponent } from './components/date/date.component';
// import { MaterialDataGridComponent } from './components/datagrid/datagrid.component';
// import { MaterialEditGridComponent } from './components/editgrid/editgrid.component';
// import { MaterialWellComponent } from './components/well/well.component';
// import { MaterialWizardComponent } from './components/formio.wizard';
// import { MaterialTimeComponent } from './components/time/time.component';
// import { MaterialCalendarComponent } from './components/calendar/calendar.component';
// import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormioFormFieldComponent } from "./components/formio-form-field/formio-form-field.component";
// import { MaskDirective } from './directives/mask.directive';

import { AddModule } from "@carbon/icons-angular";

import {
  ButtonModule,
  DialogModule,
  CheckboxModule,
  ComboBoxModule,
  DropdownModule,
  RadioModule,
  InputModule,
  DocumentationModule,
} from "carbon-components-angular";

// import { MaskDirective } from './directives/mask.directive';

export {
  FormioComponent,
  CarbonComponent,
  CarbonButtonComponent,
  // MaterialButtonComponent,
  // CarbonTextfieldComponent,
  CarbonPasswordComponent,
  // MaterialUrlComponent,
  CarbonEmailComponent,
  CarbonPhoneNumberComponent,
  CarbonNumberComponent,
  CarbonCurrencyComponent,
  // MaterialDayComponent,
  // MaterialHiddenComponent,
  CarbonHtmlComponent,
  // MaterialTagsComponent,
  // MaterialTableComponent,
  CarbonTextareaComponent,
  CarbonColumnsComponent,
  CarbonContainerComponent,
  // MaterialDataGridComponent,
  // MaterialEditGridComponent,
  // MaterialPanelComponent,
  // MaterialCheckboxComponent,
  // MaterialFieldsetComponent,
  CarbonContentComponent,
  // MaterialSignatureComponent,
  // MaterialSurveyComponent,
  CarbonSelectBoxesComponent,
  CarbonRadioComponent,
  CarbonSelectComponent,
  // MaterialTabsComponent,
  // MaterialDateComponent,
  // MaterialWellComponent,
  // CarbonComponent,
  CarbonNestedComponent,
  // MaterialTimeComponent,
};

@NgModule({
  declarations: [
    CarbonComponent,
    FormioComponent,
    CarbonButtonComponent,
    CarbonCheckboxComponent,
    // MaterialButtonComponent,
    CarbonTextfieldComponent,
    CarbonPasswordComponent,
    // MaterialUrlComponent,
    CarbonEmailComponent,
    CarbonPhoneNumberComponent,
    CarbonNumberComponent,
    CarbonCurrencyComponent,
    // MaterialDayComponent,
    // MaterialHiddenComponent,
    CarbonHtmlComponent,
    // MaterialTagsComponent,
    CarbonTextareaComponent,
    CarbonColumnsComponent,
    CarbonContainerComponent,
    // MaterialDataGridComponent,
    // MaterialEditGridComponent,
    // MaterialPanelComponent,
    // MaterialCheckboxComponent,
    // MaterialFieldsetComponent,
    CarbonContentComponent,
    // MaterialSignatureComponent,
    // MaterialSurveyComponent,
    CarbonSelectBoxesComponent,
    CarbonRadioComponent,
    CarbonSelectComponent,
    // MaterialTabsComponent,
    // MaterialTableComponent,
    // MaterialDateComponent,
    // MaterialWellComponent,
    // MaterialWizardComponent,
    // CarbonComponent,
    CarbonNestedComponent,
    // MaterialTimeComponent,
    // MaterialCalendarComponent,
    FormioFormFieldComponent,
    LabelComponent,
    // MaskDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    RadioModule,
    CheckboxModule,
    ComboBoxModule,
    InputModule,
    DocumentationModule,

    // icons
    AddModule,
  ],
  exports: [
    FormioComponent,
    FlexLayoutModule,
    ButtonModule,
    DropdownModule,
    RadioModule,
    CheckboxModule,
    ComboBoxModule,
    DialogModule,
  ],
  entryComponents: [
    CarbonComponent,
    FormioComponent,
    CarbonButtonComponent,
    CarbonCheckboxComponent,
    // MaterialButtonComponent,
    CarbonTextfieldComponent,
    CarbonPasswordComponent,
    // MaterialUrlComponent,
    CarbonEmailComponent,
    CarbonPhoneNumberComponent,
    CarbonNumberComponent,
    CarbonCurrencyComponent,
    // MaterialDayComponent,
    // MaterialHiddenComponent,
    CarbonHtmlComponent,
    // MaterialTagsComponent,
    CarbonTextareaComponent,
    CarbonColumnsComponent,
    CarbonContainerComponent,
    // MaterialDataGridComponent,
    // MaterialEditGridComponent,
    // MaterialPanelComponent,
    // MaterialCheckboxComponent,
    // MaterialFieldsetComponent,
    CarbonContentComponent,
    // MaterialSignatureComponent,
    // MaterialSurveyComponent,
    CarbonSelectBoxesComponent,
    CarbonRadioComponent,
    CarbonSelectComponent,
    // MaterialTabsComponent,
    // MaterialTableComponent,
    // MaterialDateComponent,
    // MaterialWellComponent,
    // CarbonComponent,
    CarbonNestedComponent,
    // MaterialTimeComponent,
    // MaterialWizardComponent
  ],
})
export class CarbonFormioModule {
  constructor() {
    initRenderer();
  }
}
export * from "./renderer";
