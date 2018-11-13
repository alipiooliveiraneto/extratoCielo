import { Component, OnInit } from '@angular/core';

import { LancamentosService } from './lancamentos.service';
import { Lancamento } from './lancamento';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit {

  lancamentos: Lancamento[] = [];

  constructor(private lancamentosService : LancamentosService) { }

  ngOnInit() {
    this.lancamentosService
      .listLancamentos()
      .subscribe(lancamentos => this.lancamentos = lancamentos);
  }

}
