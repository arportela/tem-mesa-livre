import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    routing,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
