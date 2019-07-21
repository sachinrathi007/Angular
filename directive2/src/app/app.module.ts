import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Direc1Directive } from './direc1.directive';
import { D2Directive } from './d2.directive';

@NgModule({
  declarations: [
    AppComponent,
    Direc1Directive,
    D2Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
