import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CarbonFormioModule } from "dist/angular-carbon-formio";

import { ButtonModule, InputModule } from 'carbon-components-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CarbonFormioModule, ButtonModule, InputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
