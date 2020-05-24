import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitacao-transporte',
  templateUrl: './solicitacao-transporte.component.html',
  styleUrls: ['./solicitacao-transporte.component.scss'],
})
export class SolicitacaoTransporteComponent implements OnInit {

  constructor(public menu: MenuController, private router: Router) { }

  estagio = 4;
  ufs = [
    'GO'
  ]

  ngOnInit() {
    this.desativaMenu();
  }
  
  desativaMenu() {
    this.menu.enable(false);
  }
  
  ativaMenu() {
    this.menu.enable(true);
  }

  proximo() {
    this.estagio ++;
  }

}
