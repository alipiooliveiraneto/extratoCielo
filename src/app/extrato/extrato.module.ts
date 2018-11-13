import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { LancamentosComponent } from './lancamentos/lancamentos.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [LancamentosComponent],
  exports : [LancamentosComponent]
})
export class ExtratoModule { }
