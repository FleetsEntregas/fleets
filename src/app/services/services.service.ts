import { Injectable, EventEmitter } from '@angular/core';   

@Injectable()
export class ServicesService {

    alteracaoPag = new EventEmitter();
    dash = new EventEmitter();
    voltar = new EventEmitter();

    constructor() {}

}