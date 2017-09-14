import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SafeHtmlPipe } from './safe.html.pipe';
import { Page1Component } from './page1.component';
import { Page2Component } from './page2.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
