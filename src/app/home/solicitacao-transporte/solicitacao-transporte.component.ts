import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-solicitacao-transporte',
  templateUrl: './solicitacao-transporte.component.html',
  styleUrls: ['./solicitacao-transporte.component.scss'],
})
export class SolicitacaoTransporteComponent implements OnInit {

  constructor(private servicesService: ServicesService, public menu: MenuController, private router: Router) { }

  estagio = 1;
  endereco = false;

  ufs = [
    'GO'
  ]

  ngOnInit() {
    this.desativaMenu();
    this.servicesService.dash.emit(false);
    this.servicesService.alteracaoPag.emit('Dados do Destinatário');
    this.servicesService.voltar.subscribe(() => {
      this.voltar();
    })
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
      this.ativaMenu();
      this.servicesService.dash.emit(true);
      this.router.navigate(['/inicio']);
    }
    if(this.estagio === 2){
      this.servicesService.alteracaoPag.emit('Dados da Carga/Veículo');
    }
    else if(this.estagio === 3) {
      this.servicesService.alteracaoPag.emit('Forma de Pagamento');
    }
  }

  concluido() {
    this.endereco = false;
    this.estagio = 1;
    this.servicesService.alteracaoPag.emit('Dados do Destinatário');
  }

  telaEndereco(){
    this.estagio = 0;
    this.endereco = true;
    this.servicesService.alteracaoPag.emit('Endereço do Destinatário');
  }

  voltar() {
    if(this.estagio === 0) {
      this.endereco = false;
      this.estagio = 1;
      this.servicesService.alteracaoPag.emit('Dados do Destinatário');
    }
    else if(this.estagio === 1) {
      this.ativaMenu();
      this.servicesService.dash.emit(true);
      this.router.navigate(['/inicio']);
    }
    else if(this.estagio === 2 ){
      this.estagio --;
      this.servicesService.alteracaoPag.emit('Dados do Destinatário');
    }
    else if(this.estagio === 3) {
      this.estagio --;
      this.servicesService.alteracaoPag.emit('Dados da Carga/Veículo');
    }
  }

}
