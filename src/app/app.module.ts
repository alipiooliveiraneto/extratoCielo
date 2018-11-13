import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExtratoModule } from './extrato/extrato.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExtratoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
