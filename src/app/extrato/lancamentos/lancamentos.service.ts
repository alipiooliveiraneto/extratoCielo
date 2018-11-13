import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Lancamento } from "./lancamento";

@Injectable({providedIn: 'root'})
export class LancamentosService{
    
    constructor(private http: HttpClient){

    }

    listLancamentos(){
        return this.http.get<Lancamento[]>('http://localhost:9000/lancamentos');
    }
}