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

  estagio = 1;
  endereco = false;

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
    if(this.estagio < 3) {
      this.estagio ++;
    }
    else {
      this.router.navigate(['/inicio']);
    }
  }

  concluido() {
    this.endereco = false;
    this.estagio = 1;
  }

  telaEndereco(){
    this.estagio = 0;
    this.endereco = true;
  }

}
