import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class SolicitacaoTransporteService {

    alteracaoPag = new EventEmitter();

    constructor() {}

}