import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CarbonFormioModule } from "angular-carbon-formio";

import {
  ButtonModule,
  ComboBoxModule,
  DropdownModule,
  InputModule,
} from "carbon-components-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarbonFormioModule,
    ButtonModule,
    InputModule,
    DropdownModule,
    ComboBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
