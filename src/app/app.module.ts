import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NumberOnlyDirective, PhoneNumberDirective } from './shared/directives/numberOnly.directive'

import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';


@NgModule({
  declarations: [
    AppComponent, DirectivesComponent, PipesComponent, NumberOnlyDirective, PhoneNumberDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
