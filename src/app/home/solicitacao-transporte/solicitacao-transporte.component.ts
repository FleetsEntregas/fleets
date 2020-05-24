import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SolicitacaoTransporteService } from 'src/app/services/solicitacao-transporte.service';

@Component({
  selector: 'app-solicitacao-transporte',
  templateUrl: './solicitacao-transporte.component.html',
  styleUrls: ['./solicitacao-transporte.component.scss'],
})
export class SolicitacaoTransporteComponent implements OnInit {

  constructor(private solicitacaoTransporteService: SolicitacaoTransporteService, public menu: MenuController, private router: Router) { }

  estagio = 1;
  endereco = false;

  ufs = [
    'GO'
  ]

  ngOnInit() {
    this.desativaMenu();
    this.solicitacaoTransporteService.alteracaoPag.emit('Dados do Destinatário');
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
    if(this.estagio === 2){
      this.solicitacaoTransporteService.alteracaoPag.emit('Dados da Carga/Veículo');
    }
    else if(this.estagio === 3) {
      this.solicitacaoTransporteService.alteracaoPag.emit('Forma de Pagamento');
    }
  }

  concluido() {
    this.endereco = false;
    this.estagio = 1;
    this.solicitacaoTransporteService.alteracaoPag.emit('Dados do Destinatário');
  }

  telaEndereco(){
    this.estagio = 0;
    this.endereco = true;
    this.solicitacaoTransporteService.alteracaoPag.emit('Endereço do Destinatário');
  }

}
